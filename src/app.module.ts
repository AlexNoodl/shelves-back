import {Module} from "@nestjs/common";
import {DatabaseModule} from "./database/database.module";
import { UsersModule } from './users/users.module';
import {ConfigModule} from "@nestjs/config";

@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: 'config.env'
        }),
        DatabaseModule,
        UsersModule
    ]
})
export class AppModule {
}