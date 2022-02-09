import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { userProviders } from './user.providers';
import { RolesModule } from '../roles';

@Module({
    controllers: [UsersController],
    providers: [UsersService, ...userProviders],
    imports: [RolesModule],
    exports: [UsersService],
})
export class UsersModule {}
