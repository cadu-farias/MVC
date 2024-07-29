import {IBankAccountRepository} from  './repository/IBankAccountRepository'
import {BankAccount} from './BankAccount'

export class BankAccountRepositoryFuleiro implements IBankAccountRepository{
    private accounts: BankAccount[] = [];

    addAccount(idUser:string,nome: string, saldo: number): object {
        const account:BankAccount = new BankAccount('b'+this.accounts.length,idUser,nome,saldo);
        this.accounts.push(account);
        return account
    }
    editAccount(id: string, nome: string, saldo: number): object | null{
        const account = this.accounts.find(a=> a.id === id);
        if (account != undefined){
            account.nome = nome;
            account.saldo = saldo;
            return account
        }
        return null
    }
    deleteAccount(id: string): object | null{
        const index = this.accounts.findIndex(a => a.id === id);
        if (index !== -1) {
            const deletedAccount = this.accounts.splice(index, 1)[0];
            return deletedAccount; // Retorna a conta removida
        } 
        return null
    }

    listAccountUser(idUser: string): object | null {
        const userAccounts = this.accounts.filter(account => account.idUser === idUser);
        return userAccounts.length > 0 ? userAccounts : null;
    }
}