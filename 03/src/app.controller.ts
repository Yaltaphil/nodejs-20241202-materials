import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { MyRoleGuard } from './my.role.guard';
import { MyTimingInterceptor } from './my.interceptor';
import { TimeoutInterceptor } from './timeout.interceptor';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseInterceptors(TimeoutInterceptor)
  @UseGuards(MyRoleGuard)
  async getHello() {
    await new Promise((resolve) => setTimeout(resolve, 10000));

    console.log('hello');

    return this.appService.getHello();
  }

  @Get(':id')
  getNumber(@Param('id', ParseIntPipe) id: number) {
    return `ваш параметр ${id}, typeof: ${typeof id}`;
  }
}
