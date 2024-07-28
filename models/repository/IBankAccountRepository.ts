export interface IBankAccountRepository{
    addAccount(id:string,nome:string, saldo:number):object;

    editAccount(id:string,nome: string, saldo:number): object;

    deleteAccount(id:string): object;
}