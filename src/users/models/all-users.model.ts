import { User } from './users.model';
import { ApiProperty } from '@nestjs/swagger';

export class AllUsers {
    @ApiProperty({
        example: [
            {
                id: 1,
                email: 'test@test.ru',
                password: 'qwerty78!',
                banned: false,
                banReason: 'Нарушение пользовательского соглашения',
            },
        ],
        description: 'Users',
    })
    rows: User[];
    @ApiProperty({ example: 1, description: 'Количество пользователей' })
    count: number;
}
