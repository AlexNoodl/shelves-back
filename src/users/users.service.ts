import { Inject, Injectable } from '@nestjs/common';
import { User } from './models';
import { CreateUserDto } from './dto';
import { RolesService } from '../roles';

@Injectable()
export class UsersService {
    constructor(
        @Inject('USER_REPOSITORY') private readonly userRepository: typeof User,
        private readonly rolesService: RolesService,
    ) {}

    async createUser(dto: CreateUserDto) {
        const user = await this.userRepository.create(dto);
        const role = await this.rolesService.getRoleByValue('USER');
        await user.$set('roles', [role.id]);
        user.roles = [role];
        return user;
    }

    async getAllUsers(): Promise<{ rows: User[]; count: number }> {
        return this.userRepository.findAndCountAll<User>({
            include: { all: true },
        });
    }

    async getUserByEmail(email: string): Promise<User> {
        return this.userRepository.findOne<User>({
            where: { email },
            include: { all: true },
        });
    }
}
