import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../models/employee.model';
import { ActivatedRoute } from '@angular/router';

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
  get employee() : Employee {
    return this._employee;
  }

  @Output() notify: EventEmitter<Employee> = new EventEmitter<Employee>();
  
  handleClick() {
    //this.notify.emit(this.employee);
  }


  constructor(private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.selectedEmployee = +this.activatedRouter.snapshot.paramMap.get('id');
  }
  
}
