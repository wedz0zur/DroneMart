import { IUser } from "./IUser";

export interface AuthRespons{
    accessToken: string;
    refreshToken: string;
    user: IUser
}