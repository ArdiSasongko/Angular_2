import { Component, OnInit } from '@angular/core';
import { DisplayService } from '../service/display.service';
import { display } from '../shared/display';
import { displayItem } from '../shared/displayItem';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  display !: display

  constructor(private dispservice :DisplayService) { }

  ngOnInit(): void {
    this.dispservice.getDispObsevable().subscribe((display)=>{
      this.display = display;
    })
  }
  
  removeDisp(dispItem : displayItem){
    this.dispservice.removeDisp(dispItem.breads.id);
  }

  changeQuantity(dispItem : displayItem, quantityString : string){
    const quantity = parseInt(quantityString);
    this.dispservice.changeQuantity(dispItem.breads.id,quantity);
  }
}
