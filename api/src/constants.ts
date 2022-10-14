import { RolesConstants, User } from "./types";

export const Tenants = [
    { name: 'TenantA', id: 1 },
    { name: 'TenantB', id: 2 },
];


export const USERS: User[] = [
    {
        id: 1,
        user: 'Foo',
        tenant: 1,
        pass: 'pass',
        roles: [RolesConstants.ADMIN, RolesConstants.CONSUMER]
    },
    {
        id: 2,
        user: 'Bar',
        tenant: 2,
        pass: 'pass',
        roles: [RolesConstants.CONSUMER]
    }
];
