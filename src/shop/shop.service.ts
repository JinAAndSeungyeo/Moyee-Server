import { Injectable } from '@nestjs/common';
import { ShopRepository } from 'shop/repositories/shop.repository copy';
import { VisitorRepository } from 'shop/repositories/playlist.repository';

@Injectable()
export class ShopService {
  constructor(
    private readonly shopRepository: ShopRepository,
    private readonly visitorRepository: VisitorRepository,
  ) { }
}
