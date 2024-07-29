import { ITransactionRepository } from './repository/ITransactionRepository'
import { Transaction } from './Transaction'
import { IReceipt } from './IReceipt'
export class TransactionRepository implements ITransactionRepository{

    private transactions: Transaction[] = []


    addTransaction(data: Date, valor: number, categoriaId: string, tipo: boolean, descricao?: string, recibo?: IReceipt | undefined): object {
        const id = 'c' + this.transactions.length
        const transaction: Transaction = new Transaction(id,data, valor, categoriaId, tipo, descricao,recibo);
        this.transactions.push(transaction);
        return this.transactions
    }
    editTrasaction(id: string, data: Date, valor: number, categoriaId: string, tipo: boolean, descricao?: string, recibo?: IReceipt | undefined): object | null {
        const transaction = this.transactions.find(u=> u.id === id);
        if (transaction != undefined) {
            transaction.data = data;
            transaction.valor = valor;
            transaction.categoriaId = categoriaId;
            transaction.tipo = tipo;
            transaction.descricao = descricao;
            transaction.recibo = recibo;
            return transaction
        }
        return null
    }
    deleteTransaction(id: string): object | null {
        const index = this.transactions.findIndex(a => a.id === id);
        if (index !== -1) {
            const deletedTransaction = this.transactions.splice(index, 1)[0];
            return deletedTransaction; // Retorna a transação removida
        } 
        return null
    }

}