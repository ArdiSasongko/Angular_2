import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items/items.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(private items:ItemsService, private route:ActivatedRoute) { }
  item:any[]=[];
  id:any;
  itemId:any;
  ngOnInit(): void {
    this.item=this.items.data
  }

  btn:boolean[]=[false]
  detail(param:any){
    this.btn[param] = !this.btn[param]
  }
  
  onCart(){
    this.items.oncart(this.item);
  }
}
