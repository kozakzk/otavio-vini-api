import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateUserDto) {
    //criptografar e substituir original pelo hash

    
    return this.prisma.user.create({data});
  }
    //adicionar método para o login (finByEmail(email: string))



  async findAll() {
    return this.prisma.user.findMany();
  }
  
  async findOne(id: string) {
    return this.prisma.user.findUnique({where: { id }});
  }

  async update(id: string, data: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id }, data});
  }
  
  async remove(id: string) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
} 