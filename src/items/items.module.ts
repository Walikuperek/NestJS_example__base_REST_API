import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { itemProviders } from './models/item.providers';
import { ItemsService } from './services/items.service';

@Module({
  controllers: [ItemsController],
  providers: [ItemsService, ...itemProviders]
})
export class ItemsModule {}
