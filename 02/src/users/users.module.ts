import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { Notification } from '../providers/Notification';

@Module({
  controllers: [UsersController],
  providers: [UsersService, Notification],
})
export class UsersModule {}
