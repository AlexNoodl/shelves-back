import { Model } from 'sequelize-typescript';

interface CreateGameAttrs {
    name: string;
    platform: string;
}

export class Game extends Model<Game, CreateGameAttrs> {}
