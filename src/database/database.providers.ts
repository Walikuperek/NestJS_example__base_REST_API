import { Sequelize } from 'sequelize-typescript';
import { Role } from 'src/auth/models/role.entity';
import { UserRole } from 'src/auth/models/user-role';
import { User } from 'src/auth/models/user.entity';
import { Item } from 'src/items/models/item.entity';
import { Cat } from '../cats/models/cats/cat.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'testnestjs',
      });
      sequelize.addModels([Cat, User, Role, UserRole, Item]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
