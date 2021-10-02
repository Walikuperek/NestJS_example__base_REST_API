import { Controller, Get, Query } from '@nestjs/common';
import { CatsService } from '../cats/services/cats/cat.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catService: CatsService) {}

  @Get()
  getAll() {
    return this.catService.findAll();
  }

  @Get('create')
  create(@Query() query: any) {
    console.log(query);
    return this.catService.create({
      name: query.n,
      age: query.a,
      breed: query.b,
    });
  }
}
