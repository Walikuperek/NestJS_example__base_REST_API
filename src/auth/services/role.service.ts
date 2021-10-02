import { Injectable, Inject } from '@nestjs/common';

import { Role } from '../models/role.entity';

@Injectable()
export class RoleService {
  constructor(
    @Inject('ROLES_REPOSITORY')
    private roleRepository: typeof Role,
  ) { }

  async findAllByName(roleName: any): Promise<Role[]> {
    return this.roleRepository.findAll<Role>({
      where: {
        name: roleName
      },
    });
  }
}
