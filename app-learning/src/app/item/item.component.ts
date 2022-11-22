import { Component, OnInit } from '@angular/core';
import { ItemService } from './item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(private item : ItemService) { }
  items:any[]=this.item.user
  ngOnInit(): void {
  }

  detail:boolean=false

  onDetail(){
    this.detail = !this.detail
  }
}
