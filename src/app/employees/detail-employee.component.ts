import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-detail-employee',
  templateUrl: './detail-employee.component.html',
  styleUrls: ['./detail-employee.component.css']
})
export class DetailEmployeeComponent implements OnInit {

  private _id : number;
  employee: Employee;
  constructor(private employeeService: EmployeeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this._id  = +params.get('id');
      this.employee = this.employeeService.getEmployeeById(this._id);
    });
  }
  viewNextEmployee() {
    if(this._id < 3){
      this._id++;
    } else {
      this._id = 1;
    }
    this.router.navigate(['/employee', this._id]);
  }

}
