import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Departement } from '../models/departement.mode';
import { Employee } from '../models/employee.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker'

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
    photoPath: null,
    password: null,
    confirmPassword: null
  };


  constructor() {
    this.datePickerConfig = Object.assign({},
      {
        containerClass: "theme-dark-blue",
        dateInputFormat: 'DD/MM/YYYY'
      });

  }

  ngOnInit() {
  }

  onSubmit(employeeForm: NgForm) {
    console.log(employeeForm);
  }

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }

}
