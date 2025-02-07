import { UserRepositoryInterface } from "./repository/UserRepositoryInterface";
import { User } from "./User";

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

    usernameExists(username:string):boolean{
        const usernameexist = this.users.find(u=> u.username === username);
        if (usernameexist == undefined) return false
        return true
    }

}