import { ITransaction } from "./ITransaction";
export interface IBankAccount{
    id:string;
    idUser:string;
    nome:string;
    saldo:number;
    transacoes?: ITransaction[];
};