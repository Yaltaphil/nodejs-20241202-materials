import 'dotenv/config';

import { DataSource } from 'typeorm';
import { Task } from './task/entities/task.entity';
import { User } from './user/entities/user.entity';

export default new DataSource({
  type: process.env.DB_TYPE as any,
  database: process.env.DATABASE,
  entities: [User, Task],
  migrations: ['migrations/*.ts'],
});
