import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { UsersService } from '../../users/users.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private usersService: UsersService) {
    super();
  }

  async validate(username: string, password: string) {
    // null | user
    const user = await this.usersService.findOne(username);
    if (!user) return null;

    const isPasswordValid = await user.validatePassword(password);
    if (!isPasswordValid) return null;

    return user;
  }
}
