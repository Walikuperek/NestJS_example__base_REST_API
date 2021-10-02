export class CreateItemDto {
  user_sex: string; // male | female
  user_age: number;

  // Type of this group, possibilities 1 | 2 | 3
  group_type: number;

  // Exercise Article
  article_first: string; // 'title 1,title 2,title 3,title 4,title 5,etc'
  article_second: string; // 'title 1,title 2,title 3,title 4,title 5,etc'

  // Exercise Numbers
  numbers_good_answers: number; // eg. 9
  numbers_bad_answers: number; // eg. 2
  numbers_no_answers: number; // eg. 1
  numbers_thoughts: string; // '1,2,4,5,6,5'

  // Forms -> each range {1 - 6}
  forms_a: number;
  forms_b: number;
  forms_c: number;
  forms_d: number;
  forms_e: number;
  forms_f: number;
}