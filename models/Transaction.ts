import { ICategory } from "./ICategory";
import { IReceipt } from "./IReceipt";
import { ITransaction } from "./ITransaction";

export class Transaction implements ITransaction {
    id: string;
    data: Date;
    valor: number;
    categoriaId: string;
    tipo: boolean;
    descricao?: string = ''
    recibo?: IReceipt | undefined;

    constructor(id:string, data:Date, valor:number, categoriaId: string, tipo: boolean, descricao?:string, recibo?:IReceipt | undefined){
        this.id = id;
        this.data = data;
        this.valor = valor;
        this.categoriaId = categoriaId;
        this.tipo = tipo;
        this.descricao = descricao;
        this.recibo = recibo
    }

}