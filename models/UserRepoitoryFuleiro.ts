import { UserRepositoryInterface } from "./UserRepositoryInterface";
import { User } from "./User";

export class UserRepositoryFuleiro implements UserRepositoryInterface{
    private users: User[] = [];
    register(username: string, password: string, email: string, nome: string): void {
        const user: User = new User('p'+this.users.length,username,password,email,nome);
        this.users.push(user);
    }
    login(username: string, password: string): object | null {
        const user = this.users.find(u=> u.username === username);
        if (user?.password === password){
            return user
        }
        return null
    }
}