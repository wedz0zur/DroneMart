import $api from "../../http/auth.ts";
import { AxiosResponse } from "axios";
import { AuthRespons } from "../../models/response/AuthResponse.ts";

export default class AuthService{
    static async login(email: string, password: string): Promise<AxiosResponse<AuthRespons>>{
        return $api.post<AuthRespons>('/login', {email, password})
    }

    static async registration(name: string, lastName: string, email: string, password: string): Promise<AxiosResponse<AuthRespons>>{
        return $api.post<AuthRespons>('/registration', {name, lastName, email, password})
    }

    static async logout(): Promise<void>{
        return $api.post('/logout')
    }
}
