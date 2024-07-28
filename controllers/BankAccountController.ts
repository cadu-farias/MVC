import { BankAccount } from "../models/BankAccount";
import { BankAccountRepositoryFuleiro } from "../models/BankAccountRepositoryFuleiro";
import { IBankAccount } from "../models/IBankAccount";
import { IBankAccountRepository } from "../models/repository/IBankAccountRepository";
import {error_message, success_message} from "./messageReturn";

export class BankAccountController implements IBankAccountRepository{
    private static instace: BankAccountController | null = null
    
    private BankAccountRepository : IBankAccountRepository = new BankAccountRepositoryFuleiro();
    
    private constructor(){
        // Evita que a classe seja instaciada diretamente
    }
    static getIstance(): BankAccountController {
        if (!BankAccountController.instace) {
            BankAccountController.instace = new BankAccountController();
        }
        return BankAccountController.instace;
    }

    addAccount(idUser:string,nome: string, saldo: number): object {
        if (nome == '') return error_message('O Campo nome é obrigatório')
        return this.BankAccountRepository.addAccount(idUser,nome,saldo)
    }
    editAccount(id: string, nome: string, saldo: number): object | null {
        if (nome == '') return error_message('O Campo nome é obrigatório')
        return this.BankAccountRepository.editAccount(id,nome,saldo)
    }
    deleteAccount(id: string): object | null {
        return this.BankAccountRepository.deleteAccount(id)
    }
    listAccountUser(idUser: string): object | null {
        return this.BankAccountRepository.listAccountUser(idUser)
    }

}