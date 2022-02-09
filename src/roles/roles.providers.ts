import { Role, UserRoles } from './models';

export const rolesProviders = [
    {
        provide: 'ROLE_REPOSITORY',
        useValue: Role,
    },
    {
        provide: 'USER_ROLES_REPOSITORY',
        useValue: UserRoles,
    },
];
