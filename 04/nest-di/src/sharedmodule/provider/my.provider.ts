import { Injectable } from '@nestjs/common';

@Injectable()
export class MyProvider {
  constructor() {
    console.log('MyProvider initialized');
  }
}
