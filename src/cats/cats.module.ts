import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { catsProviders } from './models/cats/cat.providers';
import { CatsService } from './services/cats/cat.service';

@Module({
  providers: [CatsService, ...catsProviders],
  controllers: [CatsController],
})
export class CatsModule {}
