import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { Role } from './enums/role.enum';
import { CurrentUser } from './types/current-user';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Email ou senha errado(s)');
    }

    const payload = { sub: user.id, email: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async validateJwtUser(id: string) {
    const user = await this.usersService.findOne(id);

    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    const currentUser: CurrentUser = {
      id: user.id,
      email: user.email,
      password: user.password,
      role: user.role as Role,
    };
    return currentUser;
  }
}
