export interface ICategory{
    id:string;
    nome:string;
    tipo: boolean // true receita - false despesa
    valor_total?:number
}