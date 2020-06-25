import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { SelectedRequiredValidatorDirective } from './CustomeValidations/custom.validator';
import { ConfirmEqualValidatorDirective } from './CustomeValidations/email-validator.directive';

import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { DisplayEmployeeComponent } from './employees/display-employee.component';
import { DetailEmployeeComponent } from './employees/detail-employee.component';
import { EmployeeFilterPipe } from './CustomPipes/filterEmployee.pipe';
import { EmployeeService } from './employees/employee.service';

const appRouter: Routes = [
  { path: 'list', component: ListEmployeesComponent },
  { path: 'create', component: CreateEmployeeComponent },
  { path: 'employee/:id', component: DetailEmployeeComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    SelectedRequiredValidatorDirective,
    ConfirmEqualValidatorDirective,
    DisplayEmployeeComponent,
    DetailEmployeeComponent,
    EmployeeFilterPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouter),
    FormsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
