import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Departement } from '../models/departement.mode';
import { Employee } from '../models/employee.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker'
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  previewPhoto = false;
  datePickerConfig: Partial<BsDatepickerConfig>;
  Departements: Departement[] =
    [
      { id: 1, name: 'IT' },
      { id: 2, name: 'Help Desk' },
      { id: 3, name: 'HR' },
    ];

  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    phoneNumber: null,
    contactPreference: null,
    email: null,
    dateOfBirth: null,
    department: '-1',
    isActive: null,
    photoPath: null
    //password: null,
    //confirmPassword: null
  };


  constructor(private employeeService: EmployeeService,
    private _router: Router) {
    this.datePickerConfig = Object.assign({},
      {
        containerClass: "theme-dark-blue",
        dateInputFormat: 'DD/MM/YYYY'
      });

  }

  ngOnInit() {
  }

  onSubmit() {
    this.employeeService.saveEmployee(this.employee);
    this._router.navigate(['list'])
  }

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }

}
