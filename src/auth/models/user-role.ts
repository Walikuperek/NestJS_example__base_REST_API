import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { Role } from './role.entity';
import { User } from './user.entity';

@Table
export class UserRole extends Model {
  @ForeignKey(() => User)
  @Column
  userId: number;

  @ForeignKey(() => Role)
  @Column
  roleId: number;
}
