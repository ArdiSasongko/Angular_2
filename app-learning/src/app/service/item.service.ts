import { Injectable } from '@angular/core';
import { breads_item } from '../data/data';
import { bread } from '../shared/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  getData():bread[]{
    return breads_item;
  }

  getDataById(id:number):bread{
    return this.getData().find(data => data.id == id)?? new bread();
  }
}
