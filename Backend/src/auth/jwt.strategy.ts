import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Pega o token do Header "Authorization: Bearer ..."
      ignoreExpiration: false,
      secretOrKey: 'process.env.JWT_SECRET', // TEM QUE SER IGUAL A QUE VOCÊ USOU NO AUTH MODULE
    });
  }

  async validate(payload: any) {
    // O que retornar aqui vai ficar disponível na requisição como `req.user`
    return { userId: payload.sub, email: payload.email };
  }
}