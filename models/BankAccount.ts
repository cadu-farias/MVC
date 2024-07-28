import { IBankAccount } from "./IBankAccount";
import { ITransaction } from "./ITransaction";

export class BankAccount implements IBankAccount {
    id:string;
    idUser:string;
    nome:string;
    saldo:number;
    transacoes?: ITransaction[];

    constructor(id:string, idUser:string, nome:string, saldo:number, transacoes?:ITransaction[]){
        this.id = id;
        this.idUser = idUser
        this.nome = nome;
        this.saldo = saldo;
        this.transacoes = transacoes
    }
}