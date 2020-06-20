import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private listEmployee: Employee[] = [
    {
      id: 1,
      name: 'Mark',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'mark@pragimtech.com',
      dateOfBirth: new Date('10/25/1988'),
      department: '3',
      isActive: true,
      photoPath: 'assets/Images/mark.png'
    },
    {
      id: 2,
      name: 'Mary',
      gender: 'Female',
      contactPreference: 'Phone',
      email: 'Mary@Hotmail.com',
      phoneNumber: 2345978640,
      dateOfBirth: new Date('11/20/1979'),
      department: '2',
      isActive: true,
      photoPath: 'assets/Images/mary.png'
    },
    {
      id: 3,
      name: 'John',
      gender: 'Male',
      contactPreference: 'Phone',
      email: 'John@gmail.com',
      phoneNumber: 5432978640,
      dateOfBirth: new Date('3/25/1976'),
      department: '1',
      isActive: false,
      photoPath: 'assets/Images/john.png'
    },
  ];

  constructor() { }

  getEmployees(): Employee[] {
    return this.listEmployee;
  }

  saveEmployee(employee: Employee) {
    this.listEmployee.push(employee);
  }
}
