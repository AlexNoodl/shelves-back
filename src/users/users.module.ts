import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { userProviders } from './user.providers';

@Module({
  controllers: [UsersController],
  providers: [UsersService, ...userProviders],
})
export class UsersModule {
}
