import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(payload) {
    const user = await this.usersService.findOne(payload.username);
    if (!user) throw new BadRequestException('no such user');

    const isPasswordValid = await user.validatePassword(payload.password);
    if (!isPasswordValid) throw new BadRequestException('invalid password');

    const token = await this.jwtService.signAsync({
      sub: user.id,
      username: user.username,
    });

    return { token };
  }
}
