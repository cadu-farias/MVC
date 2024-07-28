export interface ITransactionRepository{
    addTransaction(id:string, data:Date, valor:number, categoria:string, descricao?:string, recibo?:string):object;

    editTrasaction(id:string, data:Date, valor:number, categoria:string, descricao?:string, recibo?:string):object;
    
    deleteTransaction(id:string):object;
}