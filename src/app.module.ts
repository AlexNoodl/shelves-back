import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users';
import { ConfigModule } from '@nestjs/config';

@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `${process.env.NODE_ENV}.env`,
        }),
        DatabaseModule,
        UsersModule,
    ],
})
export class AppModule {}
