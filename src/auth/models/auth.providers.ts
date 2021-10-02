import { User } from './user.entity';
import { Role } from './role.entity';
import { UserRole } from './user-role';

export const authProviders = [
  {
    provide: 'USERS_REPOSITORY',
    useValue: User,
  },
  {
    provide: 'ROLES_REPOSITORY',
    useValue: Role,
  },
  {
    provide: 'USER_ROLES_REPOSITORY',
    useValue: UserRole
  },
];