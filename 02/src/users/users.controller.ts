import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import User from './user.model';
import { UsersService } from './users.service';
import IdParam from './IdParam';
import QueryParams from './QueryParams';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {
    console.log('UsersController initialized');
  }

  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  @Post()
  createUser(@Body() user: User) {
    return this.usersService.createUser(user);
  }

  // @Param, @Query, @Body
  @Get('/confirmation')
  getAgreement(@Query() query: QueryParams) {
    console.log(query);
    return 'getAgreement';
  }

  @Get(':id')
  getUserById(@Param() params: IdParam) {
    console.log(params);
    // console.log(id.toFixed(2));
    return 'getUserById';
  }
}
