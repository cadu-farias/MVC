import { ICategory } from "./ICategory";
import { IReceipt } from "./IReceipt";

export interface ITransaction{
    id: string;
    data: Date;
    valor:number;
    categoria:ICategory;
    descricao?: string
    recibo?: IReceipt;
}