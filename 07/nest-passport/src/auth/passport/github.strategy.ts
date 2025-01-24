import { Strategy } from 'passport-github2';
import { PassportStrategy } from '@nestjs/passport';
import { UsersService } from '../../users/users.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy) {
  constructor(private usersService: UsersService) {
    super({
      clientID: 'Iv23liw5EoeurfgwXBqx',
      clientSecret: '3a473f91332752798c861e355fc6c8441c66ceac',
      callbackURL: 'http://localhost:3000/auth/github/callback',
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any) {
    let user = await this.usersService.findOne(profile.username);
    if (!user) {
      user = await this.usersService.create(profile.username);
    }

    return user;
  }
}
