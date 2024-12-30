import { Injectable, NotFoundException } from '@nestjs/common';
import User from './user.model';
import { Notification } from '../providers/Notification';

@Injectable()
export class UsersService {
  private users: User[] = [];

  constructor(private readonly notificationService: Notification) {}

  getUsers() {
    return this.users;
  }

  createUser(user: User) {
    this.users.push(user);

    this.notificationService.sendEmail(
      user.email,
      'welcome',
      `hi ${user.name}, welcome to our service!`,
    );

    return user;
  }
}
