import { IUser } from "./IUser";
export class User implements IUser {
    id: string;
    username: string;
    password: string;
    email: string;
    nome: string;
    
    constructor(id:string, username:string, password:string, email:string, nome:string){
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.nome = nome;
    }

}