import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees: Employee[] = [];
  employeeToDispaly: Employee;
  private arrayIndex = 1;
  dataFromChild : Employee;
  constructor(private employeeService: EmployeeService, private _route: Router) { }

  ngOnInit() {
    this.employees = this.employeeService.getEmployees();
    this.employeeToDispaly = this.employees[0];
  }

  handleNotify(eventEmitter: Employee) {
    this.dataFromChild = eventEmitter;
  }

  nextEmployee(): void {
    if (this.arrayIndex < this.employees.length) {
      this.employeeToDispaly = this.employees[this.arrayIndex];
      this.arrayIndex++;
    } else {
      this.employeeToDispaly = this.employees[0];
      this.arrayIndex = 1;
    }
  }


  rediretToDetailEmployee(employeeId: number) {
    this._route.navigate(['/employee', employeeId]);
  }

  

}
