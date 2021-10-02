import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { authProviders } from './models/auth.providers';
import { RoleService } from './services/role.service';
import { UserService } from './services/user.service';

@Module({
  providers: [RoleService, UserService, ...authProviders],
  controllers: [AuthController],
})
export class AuthModule {}
