import { User } from "./User";
export interface UserRepositoryInterface {
    register(username:string, password:string, email:string, nome:string):object;

    login(username:string, password:string):object | null;

    changePassoword(user:User, newPassword:string):object;


}