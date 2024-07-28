import { IBankAccount } from "./IBankAccount";

export interface IUser{
    id:string;
    username:string;
    password:string;
    email:string;
    nome: string;
    contaBancaria?: IBankAccount;
}