import { IReceipt } from "./IReceipt";

export class Receipt implements IReceipt {
    id: string;
    image: string;
    
    constructor(id:string, image:string){
        this.id = id
        this.image = image
    }
}