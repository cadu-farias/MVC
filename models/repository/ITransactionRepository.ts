import { IReceipt } from "../IReceipt";
export interface ITransactionRepository{
    addTransaction(data:Date, valor:number, categoriaId:string, tipo:boolean, descricao?:string, recibo?:IReceipt | undefined):object;

    editTrasaction(id:string, data:Date, valor:number, categoriaId:string, tipo:boolean, descricao?:string, recibo?:IReceipt | undefined):object | null;
    
    deleteTransaction(id:string):object | null;
}