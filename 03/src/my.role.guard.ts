import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';

export class MyRoleGuard implements CanActivate {
  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const role = request.headers['x-role'];

    if (!role) {
      throw new HttpException('no role', HttpStatus.UNAUTHORIZED);
    }
    return role === 'admin';
  }
}
