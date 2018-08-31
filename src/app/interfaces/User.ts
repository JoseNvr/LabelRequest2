export interface User {
    success: boolean;
    message: string;
    data: info;
}

export interface info {
    active: boolean;
    email: string;
    fullName: string;
    id: number;
    name: string;
    number: number;
    username: string;
}