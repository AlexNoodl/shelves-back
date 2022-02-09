import { User } from './models';

export const userProviders = [
    {
        provide: 'USER_REPOSITORY',
        useValue: User,
    },
];
