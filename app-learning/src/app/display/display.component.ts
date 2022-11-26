import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items/items.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private items:ItemsService, private route : ActivatedRoute) { }
  cart:any[]=[];
  ngOnInit(): void {
    this.cart=this.items.cart
  }

}
