import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/app/service/item.service';
import { items } from 'src/app/shared/items';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  listId : any;
  id : any;
  constructor(private items:ItemService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.listId = this.items.getData().find(data => data.id == this.id);
  }

}
