export interface ITransactionRepository{
    addTransaction(data:Date, valor:number, categoriaId:string, tipo:boolean, descricao?:string, recibo?:string):object;

    editTrasaction(id:string, data:Date, valor:number, categoriaId:string, tipo:boolean, descricao?:string, recibo?:string):object | null;
    
    deleteTransaction(id:string):object | null;
}