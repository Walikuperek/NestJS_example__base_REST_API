import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './services/items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  getAll(@Res() response: any) {
    this.itemsService.getAll()
      .then(items => response.status(200).send(items))
      .catch(err => response.status(500).send({ message: err }))
  }

  @Post('/create')
  create(
    @Body() createItemDto: CreateItemDto,
    @Res() response: any
  ) {
    this.itemsService.create(createItemDto)
      .then(item => response.status(201).send(item))
      .catch(err => response.status(500).send({ message: err }))
  }
}
