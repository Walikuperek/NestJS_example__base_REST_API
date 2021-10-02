import { TEXT } from 'sequelize';
import { Table, Column, Model } from 'sequelize-typescript';
import { DataType } from 'sequelize-typescript';

@Table
export class Item extends Model {
  // User's data
  @Column
  user_sex: string; // male | female
  @Column
  user_age: number;

  // Type of this group, possibilities 1 | 2 | 3
  @Column
  group_type: number;

  // Exercise Article
  @Column(DataType.TEXT)
  article_first: string; // 'title 1,title 2,title 3,title 4,title 5'
  @Column(DataType.TEXT)
  article_second: string; // 'title 1,title 2,title 3,title 4,title 5,etc'

  // Exercise Numbers
  @Column
  numbers_good_answers: number; // eg. 9
  @Column
  numbers_bad_answers: number; // eg. 2
  @Column
  numbers_no_answers: number; // eg. 1
  @Column
  numbers_thoughts: string; // '1,2,4,5,6,5'

  // Forms -> each range {1 - 6}
  @Column
  forms_a: number;
  @Column
  forms_b: number;
  @Column
  forms_c: number;
  @Column
  forms_d: number;
  @Column
  forms_e: number;
  @Column
  forms_f: number;
}