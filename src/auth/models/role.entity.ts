import { Table, Column, Model, BelongsToMany } from 'sequelize-typescript';
import { UserRole } from './user-role';
import { User } from './user.entity';

@Table
export class Role extends Model {
  @BelongsToMany(() => User, () => UserRole)
  authors: User[];

  @Column
  name: string;
}
