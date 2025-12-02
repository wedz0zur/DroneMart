import $api from "../../http/auth.ts";
import { AxiosResponse } from "axios";
import { AuthRespons } from "../../models/response/AuthResponse.ts";
import { IUser } from "../../models/response/IUser.ts";

export default class UserService{
    static fetchUsers(): Promise<AxiosResponse<IUser[]>>{
        return $api.get<IUser[]>('/users')
    }
}
