import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  public cartList : any =[];
  public itemList = new BehaviorSubject<any>([]);

  constructor() { }

  getItem(){
    return this.itemList.asObservable();
  }

  setItem(item : any){
    this.cartList.push(...item);
    this.itemList.next(item);
  }

  addtoCart(item : any){
    this.cartList.push(item);
    this.itemList.next(this.cartList);
    this.getTotalPrice();
    console.log(this.cartList);
  }

  getTotalPrice() : number{
    let Grandtotal = 0;
    this.cartList.map((data:any)=>{
      Grandtotal += data.total;
    })
    return Grandtotal;
  }

  removeCart(item : any){
    this.cartList.map((data:any,index:any)=>{
      if(item.id === data.id){
        this.cartList.splice(index,1)
      }
    })
    this.itemList.next(this.cartList);
  }

  removeAllCart(){
    this.cartList =[];
    this.itemList.next(this.cartList);
  }
}
