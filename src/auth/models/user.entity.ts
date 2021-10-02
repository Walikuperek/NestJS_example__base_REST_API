import { Table, Column, Model, BelongsToMany } from 'sequelize-typescript';
import { Role } from './role.entity';
import { UserRole } from './user-role';

@Table
export class User extends Model {
  @BelongsToMany(() => Role, () => UserRole)
  roles: Role[];

  @Column
  username: string;

  @Column
  email: string;

  @Column
  password: string;
}
