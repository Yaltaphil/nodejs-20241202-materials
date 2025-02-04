import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from './public.decorator';
import { Roles } from './roles.decorator';
import { Role } from './users/entities/user.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Public()
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Roles(Role.ADMIN)
  @Get('secret')
  secret() {
    return 'secret';
  }
}
