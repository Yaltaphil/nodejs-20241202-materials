import { Length } from 'class-validator';

export default class IdParam {
  @Length(10, 11)
  id: string;
}
