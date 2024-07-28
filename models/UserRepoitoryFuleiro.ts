import { IUser } from "./IUser";
import { UserRepositoryInterface } from "./repository/UserRepositoryInterface";
import { User } from "./User";
import { IBankAccount } from "./IBankAccount";

export class UserRepositoryFuleiro implements UserRepositoryInterface{
    private users: User[] = [];
    register(username: string, password: string, email: string, nome: string): object {
        const user: User = new User('p'+this.users.length,username,password,email,nome);
        this.users.push(user);
        return this.users
    }
    login(username: string, password: string): object | null {
        const user = this.users.find(u=> u.username === username);
        if (user?.password === password){
            return user
        }
        return null
    }
    changePassoword(user:User, newPassword:string):object{
        user.password = newPassword
        return user
    }

    getAccount(user: IUser): IBankAccount | undefined {
        const accountUser = this.users.find(u=> u.id === user.id);
        if(accountUser){
            return accountUser.contaBancaria
        }
        return undefined
    }

}