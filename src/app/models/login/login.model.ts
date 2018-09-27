export interface GeneralResponse {
    success: boolean;
    message: string;
    data: User;
}

export interface User {
    active: boolean;
    email: string;
    fullName: string;
    id: number;
    name: string;
    number: number;
    username: string;
}