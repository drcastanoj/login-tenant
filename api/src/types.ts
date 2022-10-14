export interface User {
    id: number;
    user: string;
    roles: string[];
    pass: string;
    tenant: number;
}

export interface LoginUser {
    user: string;
    pass: string;
    tenant: string;
}

export enum RolesConstants {
    ADMIN = 'SUPPORTADMIN',
    CONSUMER = 'CONSUMER',

}