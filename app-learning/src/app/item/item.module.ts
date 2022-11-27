import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemRoutingModule } from './item-routing.module';
import { ItemComponent } from './item.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import { DetailComponent } from './detail/detail.component';
@NgModule({
  declarations: [
    ItemComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    ItemRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule
  ]
})
export class ItemModule { }
