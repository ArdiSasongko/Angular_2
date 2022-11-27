import { Injectable } from '@angular/core';
import { bread } from '../data/data';
import { items } from '../shared/items';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  getData():items[]{
    return bread;
  }
}
