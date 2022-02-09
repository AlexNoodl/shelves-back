import { Game } from './models/game.model';

export const gamesProviders = [
    {
        provide: 'GAMES_REPOSITORY',
        useValue: Game,
    },
];
