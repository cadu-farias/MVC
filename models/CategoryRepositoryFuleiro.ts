import { Category } from "./Category";
import { ICategoryRepository } from "./repository/ICategoryRepository";

export class CategoryRepository implements ICategoryRepository {
    private categories: Category[] = [];

    addCategory(nome: string, tipo: boolean): object {
        const id = 'c' + this.categories.length
        const category: Category = new Category(id,nome,tipo);
        this.categories.push(category);
        return this.categories
    }

    editCategory(id: string, nome: string, tipo: boolean): object | null {
        const category = this.categories.find(u=> u.id === id);
        if (category != undefined) {
            category.nome = nome;
            category.tipo = tipo;
            return category
        }
        return null
    }

    deleteCategory(id: string): object | null {
        const index = this.categories.findIndex(a => a.id === id);
        if (index !== -1) {
            const deletedCategory = this.categories.splice(index, 1)[0];
            return deletedCategory; // Retorna a categoria removida
        } 
        return null
    }

    listCategory(): object {
        return this.categories;
    }
}
