import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    console.log('Received sign-in request for email:', signInDto.email);
    console.log('Password provided:', signInDto.password ? 'Yes' : 'No');
        return this.authService.signIn(signInDto.email, signInDto.password);
  }
}
