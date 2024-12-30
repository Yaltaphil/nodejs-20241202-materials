import { Inject, Injectable } from '@nestjs/common';
import { MyProvider } from '../sharedmodule/provider/my.provider';

@Injectable()
export class TasksService {
  @Inject(MyProvider)
  private myProvider: MyProvider;
}
