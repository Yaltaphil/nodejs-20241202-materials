import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';
import { UserService } from '../user/user.service';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task) private tasksRepository: Repository<Task>,
    private readonly usersService: UserService,
  ) {}

  async create(createTaskDto: CreateTaskDto) {
    const user = await this.usersService.findOne(1);
    console.log(user);

    const task = new Task();
    task.title = createTaskDto.title;
    task.description = createTaskDto.description;
    task.users = [user];

    console.log('pre save', task);

    await this.tasksRepository.save(task);

    console.log('post save', task);

    return task;
  }

  findAll(ids?: number[]) {
    return this.tasksRepository.find({ relations: ['users'] });
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
