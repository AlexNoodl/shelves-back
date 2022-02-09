import { ApiProperty } from '@nestjs/swagger';
import { EMAIL_REGEXP, PASSWRORD_REGEXP } from '../../constants';

export class CreateUserDto {
    @ApiProperty({
        example: 'test@test.ru',
        description: 'Почтовый адрес',
        required: true,
        pattern: EMAIL_REGEXP,
    })
    readonly email: string;
    @ApiProperty({
        example: 'qwerty78!',
        description: 'Пароль',
        required: true,
        minLength: 8,
        maxLength: 20,
        pattern: PASSWRORD_REGEXP,
    })
    readonly password: string;
}
