import { IUser } from "../IUser";
export interface UserRepositoryInterface {
    register(username:string, password:string, email:string, nome:string):object;

    login(username:string, password:string):object | null;

    changePassoword(user:IUser, newPassword:string):object;

    usernameExists(username:string):boolean

}