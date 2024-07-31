import { ICategory } from "./ICategory";
import { IReceipt } from "./IReceipt";

export interface ITransaction{
    id: string;
    data: Date;
    valor:number;
    categoriaId:string;
    tipo:boolean; // false despesa - true receita
    descricao?: string;
    recibo?: IReceipt | undefined;
}