import { Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';

@Controller('users')
export class UsersController {

    @Get() 
    findAll() {
        return []
    }

    @Get(':email') 
    findOne(@Param('email') email: string) {
        return { email }
    }

    @Post()
    create(@Body() user: {}) {
        return user
    }

    @Patch(':email') 
    update(@Param('email') email: string, @Body() userUpdate: {}) {
        return { email, ...userUpdate }
    }

    @Delete(':email') 
    delete(@Param('email') email: string) {
        return { email }
    }

}