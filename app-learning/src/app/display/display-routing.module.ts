import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from '../item/item.component';
import { DisplayComponent } from './display.component';

const routes: Routes = [
  {
    path:'',
    component:DisplayComponent
  },
  {
    path:'item',
    component:ItemComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisplayRoutingModule { }
