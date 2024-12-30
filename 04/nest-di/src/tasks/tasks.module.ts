import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';

@Module({
  controllers: [TasksController],
  imports: [SharedmoduleModule],
  providers: [TasksService],
})
export class TasksModule {}
