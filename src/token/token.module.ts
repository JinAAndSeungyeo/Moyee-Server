import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TokenController } from './token.controller';
import { TokenService } from './token.service';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.JWT_EXPIRE },
    }),
  ],
  controllers: [TokenController],
  providers: [TokenService]
})
export class TokenModule { }
