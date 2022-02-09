import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto';
import { UsersService } from './users.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User, AllUsers } from './models';

@ApiTags('Пользователи')
@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @ApiOperation({ summary: 'Создание нового пользователя' })
    @ApiResponse({ status: 200, description: 'User created', type: User })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.usersService.createUser(userDto);
    }

    @ApiOperation({ summary: 'Получить всех пользователей и их число' })
    @ApiResponse({ status: 200, type: AllUsers })
    @Get()
    getAll() {
        return this.usersService.getAllUsers();
    }
}
