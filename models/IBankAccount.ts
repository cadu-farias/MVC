import { ITransaction } from "./ITransaction";
export interface IBankAccount{
    id:string;
    nome:string;
    saldo:number;
    transacoes?: ITransaction;
};