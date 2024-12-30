import { IsString } from 'class-validator';

export enum Role {
  ADMIN = 'admin',
  USER = 'user',
}

export default class User {
  email: string;

  @IsString()
  name: string;

  surname?: string;

  avatar?: string;

  age?: number;

  role?: Role;
}
