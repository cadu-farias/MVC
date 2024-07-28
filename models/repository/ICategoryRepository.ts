export interface ICategoryRepository{
    addCategory(nome:string,tipo:boolean):object;

    editCategory(id:string, nome:string, tipo:boolean):object | null;

    deleteCategory(id:string): object | null;

    listCategory():object;
    
}