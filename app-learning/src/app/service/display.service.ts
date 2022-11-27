import { Injectable } from '@angular/core';
import { display } from '../shared/display';
import { bread } from '../shared/item';
import { displayItem } from '../shared/displayItem';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {
  private getLocalStorage(){
    const dispJson = localStorage.getItem('display');
    return dispJson ? JSON.parse(dispJson) : new display();
  }

  private displays : display = this.getLocalStorage();
  private dispSubject : BehaviorSubject<display> = new BehaviorSubject(this.displays);
  constructor() { }

  private setLocalStorage():void{
    this.displays.totalPrice = this.displays.items.reduce((prevSum,currentItem)=> prevSum + currentItem.price,0);
    this.displays.totalCount = this.displays.items.reduce((prevSum,currentItem)=> prevSum + currentItem.quantity,0);

    const dispJson = JSON.stringify(this.displays);
    localStorage.setItem('display',dispJson);
    this.dispSubject.next(this.displays);
  }

  addDisp(breads : bread):void{
    let dispItem = this.displays.items.find(item => item.breads.id === breads.id)
    if(dispItem)
      return;
    
    this.displays.items.push(new displayItem(breads));
    this.setLocalStorage();
  }

  removeDisp(id:number):void{
    this.displays.items = this.displays.items.filter(
      item => item.breads.id != id
    );
    this.setLocalStorage();
  }

  changeQuantity(id:number,quantity:number){
    let dispItem = this.displays.items.find(
      item => item.breads.id === id
    );
    if(!dispItem)
    return;

    dispItem.quantity = quantity;
    dispItem.price =quantity*dispItem.breads.price;
    this.setLocalStorage();
  }

  cleardisp(){
    this.displays = new display();
    this.setLocalStorage();
  }

  getDispObsevable():Observable<display>{
    return this.dispSubject.asObservable();
  }
}
