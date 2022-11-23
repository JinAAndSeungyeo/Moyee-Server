import { BadRequestException, GoneException, Injectable, InternalServerErrorException, Logger, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IToken } from 'common/interfaces/IToken';
import ReissuanceDto from 'token/dto/reissuance.dto';

@Injectable()
export class TokenService {
  constructor(
    private jwtService: JwtService,
  ) { }

  public generateAccessToken(userId: string): string {
    return this.jwtService.sign(userId, {
      expiresIn: process.env.JWT_EXPIRE,
      issuer: 'moyee',
      subject: 'accessToken',
    });
  }

  public generateRefreshToken(userId: string): string {
    return this.jwtService.sign(userId, {
      expiresIn: process.env.JWT_EXPIRE,
      issuer: 'moyee',
      subject: 'refreshToken',
    });
  }

  public async accessTokenReissuance(reissuanceDto: ReissuanceDto): Promise<string> {
    const { refreshToken }: { refreshToken: string } = reissuanceDto;

    const { issuer, subject, userId }: IToken = await this.verifyToken(refreshToken);
    if (issuer !== 'moyee' && subject !== 'refreshToken') {
      throw new UnauthorizedException('위조된 토큰입니다');
    }

    return this.generateAccessToken(userId)
  }

  async verifyToken(token: string): Promise<IToken> {
    try {
      return this.jwtService.verify(token);
    } catch (error) {
      switch (error.message) {
        case 'jwt must be provided':
          throw new BadRequestException('토큰이 전송되지 않았습니다');
        case 'jwt malformed':
        case 'invalid token':
        case 'invalid signature':
          throw new UnauthorizedException('위조된 토큰입니다');
        case 'jwt expired':
          throw new GoneException('토큰이 만료되었습니다');
        default:
          Logger.error(error);
          throw new InternalServerErrorException('다시 시도해 주세요');
      }
    }
  }
}
