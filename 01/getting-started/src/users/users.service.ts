import { Injectable } from '@nestjs/common';
import User from './user.model';

@Injectable()
export class UsersService {
  private users: User[] = [];

  getUsers() {
    return this.users;
  }

  createUser(user: User) {
    this.users.push(user);
    return user;
  }
}
