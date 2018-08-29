export interface User {
    success: boolean;
    message: string;
    data: Data;
}

export interface Data {
    active: boolean;
    email: string;
    fullName: string;
    id: number;
    name: string;
    number: number;
    username: string;
}