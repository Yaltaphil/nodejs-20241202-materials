import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from '../public.decorator';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @UseGuards(AuthGuard('local'))
  @Post('login')
  login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Public()
  @UseGuards(AuthGuard('github'))
  @Get('github')
  github() {
    return 'ok';
  }

  @Public()
  @UseGuards(AuthGuard('github'))
  @Get('github/callback')
  githubCallback(@Request() req) {
    return this.authService.login(req.user);
  }

  @Get('profile')
  profile(@Request() request) {
    return request.user;
  }

  // @Roles(Roles.Admin)
  @Get('secret')
  secret() {
    return 'secret';
  }
}
