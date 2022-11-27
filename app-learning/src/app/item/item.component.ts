import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DisplayService } from '../service/display.service';
import { ItemService } from '../service/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  public item : any;
  constructor(private items : ItemService, private route : ActivatedRoute, private carts : DisplayService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      this.item = this.items.getData();
    });

    this.item.forEach((data:any) => {
      Object.assign(data,{quantity:1,total:data.price})
    });
  }

  addCart(item : any){
    this.carts.addtoCart(item);
  }
}
