import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DisplayService } from '../service/display.service';
import { ItemService } from '../service/item.service';
import { bread } from '../shared/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  breads:bread[]=[];
  data!:bread;
  constructor(private items:ItemService, private route : ActivatedRoute,private router: Router, private display:DisplayService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      this.breads = this.items.getData();
    })
  }

  add(){
    this.display.addDisp(this.data);
    this.router.navigate(['/display'])
  }

}
