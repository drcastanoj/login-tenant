
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { User } from './types';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector, private jwt: JwtService) { }

    canActivate(context: ExecutionContext): boolean {
        const roles = this.reflector.get<string[]>('roles', context.getHandler());
        if (!roles) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const token = request.headers.authorization;
        const user: User = this.jwt.verify(token);
        return user.roles.some((r) => roles.includes(r));

    }
}
