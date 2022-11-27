import { Component, OnInit } from '@angular/core';
import { DisplayService } from '../service/display.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  public items : any = [];
  public GrandTotal : number = 0;

  constructor(private disp : DisplayService) { }

  ngOnInit(): void {
    this.disp.getItem().subscribe(data=>{
      this.items = data;
      this.GrandTotal = this.disp.getTotalPrice();
    })
  }

  delete(item : any){
    this.disp.removeCart(item)
  }

  emptyall(){
    this.disp.removeAllCart();
  }
}
