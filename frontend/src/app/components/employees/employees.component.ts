import { Component, OnInit } from '@angular/core';

import { EmployeeService } from "../../services/employee.service";
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/models/employee';

declare var M: any;

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [EmployeeService]

})
export class EmployeesComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  //APP INIT
  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployees()
      .subscribe(res => {
        this.employeeService.employees = res as Employee[];
        console.log(res);
        M.toast({ html: "Loaded Successfuly!" });
      });
  }

  addEmployee(form: NgForm) {
    // console.log(form.value);

    if (form.value._id) {

      this.employeeService.putEmployee(form.value)
        .subscribe(res => {
          console.log(res);
          // this.resetForm(form);
          M.toast({ html: "Save Successfuly!" });
          this.getEmployees();
        });

    } else {
      this.employeeService.postEmployee(form.value)
        .subscribe(res => {
          console.log(res);
          this.resetForm(form);
          M.toast({ html: "Save Successfuly!" });
          this.getEmployees();
        });
    }
  }

  editEmployee(employee: Employee) {
    this.employeeService.selectedEmployee = employee;
  }

  //RESET FORM
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.employeeService.selectedEmployee = new Employee();
    }
  }
}
