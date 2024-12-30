import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import User from './user.model';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  @Post()
  createUser(@Body() user: User) {
    return this.usersService.createUser(user);
  }

  @Get(':id')
  getUserById(@Param('id') id: number) {
    console.log(id, typeof id);
    console.log(id.toFixed(2));
    return 'ok';
  }
}
