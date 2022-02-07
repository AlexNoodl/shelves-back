import { Inject, Injectable } from '@nestjs/common';
import { User } from './users.model';
import { CreateUserDto } from './dto';

@Injectable()
export class UsersService {
    constructor(
        @Inject('USER_REPOSITORY') private userRepository: typeof User,
    ) {}

    async createUser(dto: CreateUserDto) {
        return await this.userRepository.create(dto);
    }

    async getAllUsers(): Promise<{ rows: User[]; count: number }> {
        return this.userRepository.findAndCountAll<User>();
    }

    async getUser(): Promise<User> {
        return this.userRepository.findOne<User>();
    }
}
