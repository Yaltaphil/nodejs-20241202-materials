import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { Analytics } from './providers/Analytics';
import { ScheduleModule } from '@nestjs/schedule';
import { Notification } from './providers/Notification';

@Module({
  imports: [UsersModule, ScheduleModule.forRoot()],
  controllers: [],
  providers: [Analytics, Notification],
})
export class AppModule {}
