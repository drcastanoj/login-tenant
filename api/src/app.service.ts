import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Tenants, USERS } from './constants';
import { LoginUser, User } from './types';

@Injectable()
export class AppService {

  constructor(private jwt: JwtService) {

  }
  getUser(user: LoginUser): User {
    const tenant = Tenants.find(t => t.name === user.tenant);
    return USERS.find(((u) => u.user === user.user && u.pass === user.pass && u.tenant === tenant.id));
  }

  getTenant(id: number): any {
    return Tenants.find((t) => t.id === id);
  }

  createToken(loginUser: LoginUser): string {
    const user = this.getUser(loginUser);
    if (user) {

      const userToken = {
        user: user.user,
        tenant: this.getTenant(user.tenant),
        roles: user.roles,
      }
      return this.jwt.sign(userToken, { privateKey: 'key' });
    }
    throw new BadRequestException();

  }
}
