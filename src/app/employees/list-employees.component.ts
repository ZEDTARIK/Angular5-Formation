import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  
  searchTxt :string;
  employees: Employee[] = [];
  employeeToDispaly: Employee;
  dataFromChild : Employee;
  
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employees = this.employeeService.getEmployees();
    this.employeeToDispaly = this.employees[0];
  }

  trackByEmpId(index: number, employee: any): string {
    return employee.id;
  }

}
