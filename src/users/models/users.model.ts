import {
    BelongsToMany,
    Column,
    DataType,
    Model,
    Table,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Role, UserRoles } from '../../roles';

interface IUserCreationAttrs {
    email: string;
    password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, IUserCreationAttrs> {
    @ApiProperty({ example: '1', description: 'Уникальный id' })
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ApiProperty({
        example: 'test@test.ru',
        description: 'Уникальный email',
    })
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    email: string;

    @ApiProperty({
        example: 'qwerty78!',
        description: 'Пароль',
    })
    @Column({ type: DataType.STRING, allowNull: false })
    password: string;

    @ApiProperty({ example: false, description: 'Выставлен бан да/нет' })
    @Column({ type: DataType.BOOLEAN, defaultValue: false })
    banned: boolean;

    @ApiProperty({
        example: 'Нарушение пользовательского соглашения',
        description: 'Причина бана',
    })
    @Column({ type: DataType.STRING, allowNull: true })
    banReason: string;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[];
}
