import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        {
            "id": 1,
            "email": "fabricio@pnb.com",
            "password": "paidetodos"
        }
    ]

    async findAll() {
        return this.users
    }

    async findOne(id: number) {
        const user = this.users.find(user => user.id === id)

        return user
    }

    async create() {
        
    }

    async update() {
        
    }

    async delete(id: number) {
        const removedUser = this.findOne(id)

        this.users = this.users.filter(user => user.id !== id)

        return removedUser
    }

}