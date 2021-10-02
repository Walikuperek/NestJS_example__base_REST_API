import { Module } from '@nestjs/common';

import { DatabaseModule } from './database/database.module';

import { CatsModule } from './cats/cats.module';
import { AuthModule } from './auth/auth.module';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [DatabaseModule, CatsModule, AuthModule, ItemsModule]
})
export class AppModule {}
