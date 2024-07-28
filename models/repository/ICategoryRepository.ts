export interface ICategoryRepository{
    addCategory(id:string, nome:string,tipo:boolean):object;

    editCategory(id:string, nome:string, tipo:boolean):object;

    deleteCategory(id:string);

    listCategory():object;
    
}