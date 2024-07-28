import { IUser } from "./IUser";
import { IBankAccount } from "./IBankAccount";
export class User implements IUser {
    id: string;
    username: string;
    password: string;
    email: string;
    nome: string;
    contaBancaria?: IBankAccount | undefined;
    
    constructor(id:string, username:string, password:string, email:string, nome:string){
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.nome = nome;
    }

}