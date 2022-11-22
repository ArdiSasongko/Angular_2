import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './item.component';
import { FormComponent } from './form/form.component';

const routes : Routes=[
  {
    path:'',
    component:ItemComponent
  },
  {
    path:'form',
    component:FormComponent
  }
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class ItemRoutingModule { }
