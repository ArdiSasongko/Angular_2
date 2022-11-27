import { bread } from "./item";

export class displayItem{
    constructor(public breads:bread){ }
    quantity:number = 1;
    price: number = this.breads.price;
}