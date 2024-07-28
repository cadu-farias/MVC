export interface IBankAccountRepository{
    addAccount(idUser: string,nome:string, saldo:number):object;

    editAccount(id:string,nome: string, saldo:number): object | null;

    deleteAccount(id:string): object | null;

    listAccountUser(idUser:string): object | null;
    
}