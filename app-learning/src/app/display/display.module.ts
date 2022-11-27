import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisplayRoutingModule } from './display-routing.module';
import { DisplayComponent } from './display.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    DisplayComponent,
  ],
  imports: [
    CommonModule,
    DisplayRoutingModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class DisplayModule { }
