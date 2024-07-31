import { ICategory } from './ICategory'
export class Category implements ICategory{
    id:string;
    nome:string;
    tipo: boolean // true receita - false despesa
    valor_total?:number = 0
    constructor(id:string, nome:string, tipo:boolean){
        this.id = id;
        this.nome = nome;
        this.tipo = tipo;
    }
}