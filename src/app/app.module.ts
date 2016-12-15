import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Select2Component } from 'ng2-select2';

import { AppComponent } from './app.component';

import { DataService } from '../services/data.service';

import { BasicComponent } from './demos/basic/basic.component';
import { TemplateComponent } from './demos/template/template.component';
import { DynamicComponent } from './demos/dynamic/dynamic.component';
import { OptionsComponent } from './demos/options/options.component';
import { ChangeComponent } from './demos/change/change.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    ChangeComponent,
    DynamicComponent,
    OptionsComponent,
    Select2Component,
    TemplateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ DataService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
