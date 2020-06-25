import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../models/employee.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {

  private selectedEmployee: number;
  private _employee: Employee;
  @Input()
  set employee(val: Employee) {
    this._employee = val;
  }
  get employee(): Employee {
    return this._employee;
  }

  constructor(private activatedRouter: ActivatedRoute,
    private _route: Router) { }

  ngOnInit() {
    this.selectedEmployee = +this.activatedRouter.snapshot.paramMap.get('id');
  }

  rediretToDetailEmployee(employeeId: number) {
    this._route.navigate(['/employee', employeeId]);
  }

}
