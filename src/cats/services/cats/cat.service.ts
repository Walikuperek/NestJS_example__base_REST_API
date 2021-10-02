import { Injectable, Inject } from '@nestjs/common';
import { CreateCatDto } from '../../dto/create-cat.dto';
import { Cat } from '../../models/cats/cat.entity';

@Injectable()
export class CatsService {
  constructor(
    @Inject('CATS_REPOSITORY')
    private catsRepository: typeof Cat,
  ) {}

  // Promise<Cat[]>
  async findAll(): Promise<any> {
    return this.catsRepository.findAll<Cat>();
  }

  async create(cat: CreateCatDto): Promise<CreateCatDto> {
    return this.catsRepository.create(cat);
  }
}
