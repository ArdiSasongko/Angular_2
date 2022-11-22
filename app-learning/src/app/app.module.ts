import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ItemRoutingModule } from './item/item-routing.module';
import { ItemModule } from './item/item.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ItemModule,
    ItemRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
