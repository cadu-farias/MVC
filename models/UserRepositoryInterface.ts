export interface UserRepositoryInterface {
    register(username:string, password:string, email:string, nome:string):void;

    login(username:string, password:string):object | null
}