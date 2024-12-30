import { PickType } from '@nestjs/swagger';
import User from './user.model';

enum SortBy {
  NAME = 'name',
  AGE = 'age',
}

export default class QueryParams extends PickType(User, ['name'] as const) {}
