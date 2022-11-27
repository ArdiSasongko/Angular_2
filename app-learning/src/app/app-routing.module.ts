import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'item',
    loadChildren:() => import('./item/item.module').then(m => m.ItemModule)
  },
  {
    path:'display',
    loadChildren:() => import('./display/display.module').then(m => m.DisplayModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
