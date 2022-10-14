import { Router } from '@angular/router';
import { EmployeeService } from './../employee.service';
import { Employee } from './../employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();

  constructor(private employeeService:EmployeeService,private router:Router) { }

  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe( data => {
      console.log(data);
      this.gotoEmployeeList();
    },
    error => console.log(error));
    this.gotoEmployeeList();
  }

  gotoEmployeeList(){
    this.router.navigate(['/employees']);
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
  }

}
