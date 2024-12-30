import { Injectable, Scope } from '@nestjs/common';
import { MyProvider } from './sharedmodule/provider/my.provider';

@Injectable()
export class AppService {
  constructor(private myProvider: MyProvider) {
    console.log('AppService initialized');
  }

  getHello(): string {
    return 'Hello World!';
  }
}
