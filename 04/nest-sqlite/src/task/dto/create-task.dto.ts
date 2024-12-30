import { PickType } from '@nestjs/mapped-types';
import { Task } from '../entities/task.entity';
import { IsString } from 'class-validator';

export class CreateTaskDto extends PickType(Task, ['title'] as const) {
  @IsString()
  title: string;

  @IsString()
  description: string;
}
