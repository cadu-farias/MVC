import { IBankAccount } from "../models/IBankAccount";
import { User } from "../models/User";
import { UserRepositoryFuleiro } from "../models/UserRepoitoryFuleiro";
import { UserRepositoryInterface } from "../models/repository/UserRepositoryInterface";
import {error_message, success_message} from "./messageReturn";

export class UserController implements UserRepositoryInterface {

    private static instace: UserController | null = null
    
    private userRepository : UserRepositoryInterface = new UserRepositoryFuleiro();
    
    private constructor(){
        // Evita que a classe seja instaciada diretamente
    }

    static getIstance(): UserController {
        if (!UserController.instace) {
            UserController.instace = new UserController();
        }
        return UserController.instace;
    }

    register(username: string, password: string, email: string, nome: string): object {
        if (username == '' || password == '' || email == '' || nome == ''){
            return error_message('Existem campos vazios')
        }else if(password.length <=3){
            return error_message('Senha muito pequena')
        }
        else{
            this.userRepository.register(username,password,email,nome)
            return success_message('Usuário registrado com sucesso')
        }
    }
    login(username: string, password: string): object | null {
        if (username == '' || password == ''){
            return null
        }else{
            const user = this.userRepository.login(username,password)
            return user
        }
    }
    changePassoword(user: User, newPassword: string): object{
        if (user.password === newPassword){
            return error_message('Sua senha não corresponde aos requisitos')
        }
        const userNewPassword = this.userRepository.changePassoword(user, newPassword)
        return userNewPassword
    }

    getAccount(user:User):IBankAccount | undefined{
        return this.userRepository.getAccount(user)
    }
    
}