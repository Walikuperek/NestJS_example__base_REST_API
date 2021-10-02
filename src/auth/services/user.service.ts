import { Injectable, Inject } from '@nestjs/common';
import { SignupDto } from '../dto/sign-up.dto';
import { User } from '../models/user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private userRepository: typeof User,
  ) {}

  async findByUsername(username: string): Promise<User> {
    return this.userRepository.findOne<User>({
      where: {
        username: username,
      },
    });
  }

  async create(user: SignupDto): Promise<SignupDto> {
    return this.userRepository.create(user);
  }
}
