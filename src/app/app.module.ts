import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { SelectedRequiredValidatorDirective } from './CustomeValidations/custom.validator';

import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';

const appRouter : Routes = [
  {path :'list', component: ListEmployeesComponent},
  {path :'create', component: CreateEmployeeComponent},
  {path: '', redirectTo:'/list', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    SelectedRequiredValidatorDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouter),
    FormsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
