import { Inject, Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto';
import { Role } from './models';

@Injectable()
export class RolesService {
    constructor(
        @Inject('ROLE_REPOSITORY')
        private readonly roleRepository: typeof Role,
    ) {}

    async createRole(dto: CreateRoleDto) {
        return await this.roleRepository.create(dto);
    }

    async getRoleByValue(value: string) {
        return await this.roleRepository.findOne({ where: { value } });
    }
}
