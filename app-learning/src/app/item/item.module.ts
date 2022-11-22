import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item.component';
import { ItemRoutingModule } from './item-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'

import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule, FloatLabelType } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormComponent } from './form/form.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    ItemComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    ItemRoutingModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatSelectModule,
    BrowserAnimationsModule
  ]
})
export class ItemModule { }
