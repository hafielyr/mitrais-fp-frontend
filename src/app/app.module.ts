import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule} from "@angular/flex-layout";
import { MdToolbarModule} from '@angular/material';
import { Md2Module }  from 'md2';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { DetailCardComponent } from './detail-card/detail-card.component';
import { EmployeeCardComponent } from './employee-card/employee-card.component';

import {EmployeeService} from './employee.service'
import { routing} from './app.routing'
import { lookupListToken, lookupLists } from './providers';
import {Angular2FlexModule} from 'angular2-flex';
import 'rxjs/add/operator/map';
import { ReloadpageService } from "app/reloadpage.service";
import { LocationService } from "app/location.service";
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    FormComponent,
    DetailCardComponent,
    EmployeeCardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    MdToolbarModule,
    Md2Module.forRoot()
  ],
  providers: [
    EmployeeService,
    ReloadpageService,
    LocationService,
    { provide: lookupListToken, useValue: lookupLists }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
