export interface GeneralResponse {
    success: boolean;
    message: string;
    data: any;
}

export interface User {
    active: boolean;
    email: string;
    fullName: string;
    id: number;
    name: string;
    number: number;
    username: string;
    message: string;
}

export interface Menu {
    link: string;
    name: string;

}