import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Select2Component } from "ng2-select2";

import { AppComponent } from './app.component';

import { DataService } from '../services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    Select2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
