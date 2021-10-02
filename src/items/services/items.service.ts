import { Injectable, Inject } from '@nestjs/common';
import { CreateItemDto } from '../dto/create-item.dto';
import { Item } from '../models/item.entity';

@Injectable()
export class ItemsService {
  constructor(
    @Inject('ITEMS_REPOSITORY')
    private itemRepository: typeof Item,
  ) { }

  async getAll(): Promise<Item[]> {
    return this.itemRepository.findAll();
  }

  async create(item: CreateItemDto): Promise<CreateItemDto> {
    return await this.itemRepository.create(item);
  }

  async findById(itemId: string): Promise<Item> {
    return this.itemRepository.findOne<Item>({
      where: {
        id: itemId,
      },
    });
  }
}
