import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule} from "@angular/flex-layout";
import {MdToolbarModule, MdDialogModule} from '@angular/material';
import { Md2Module }  from 'md2';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { EmployeeCardComponent } from './employee-card/employee-card.component';

import {EmployeeService} from './employee.service'
import { routing} from './app.routing'
import { lookupListToken, lookupLists } from './providers';
import {Angular2FlexModule} from 'angular2-flex';
import 'rxjs/add/operator/map';
import { ReloadpageService } from "app/reloadpage.service";
import { LocationService } from "app/location.service";
import { DeleteboxComponent } from "app/deletebox.component";
import { DelboxComponent } from './delbox/delbox.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    FormComponent,
    EmployeeCardComponent,
    DeleteboxComponent,
    DelboxComponent,
    FilterComponent
  ],
   entryComponents:[
    DelboxComponent,
    FilterComponent
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
    Md2Module.forRoot(),
    MdDialogModule
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
