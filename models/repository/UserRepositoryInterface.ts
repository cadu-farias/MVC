import { IUser } from "../IUser";
import { IBankAccount } from "../IBankAccount";
export interface UserRepositoryInterface {
    register(username:string, password:string, email:string, nome:string):object;

    login(username:string, password:string):object | null;

    changePassoword(user:IUser, newPassword:string):object;

    getAccount(user:IUser): IBankAccount | undefined;


}