import { IsEnum } from 'class-validator';
import User, { Role } from './user.model';

export default class UserDto {
  @IsEnum(Role)
  role: Role;
}
