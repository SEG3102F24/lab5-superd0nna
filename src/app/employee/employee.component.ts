import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, Validators, ReactiveFormsModule } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";
import { EmployeeService } from "../service/employee.service";
import { Employee } from "../model/employee";

@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.css'],
    standalone: true,
    imports: [RouterLink, ReactiveFormsModule]
})
export class EmployeeComponent {
  private builder: FormBuilder = inject(FormBuilder);
  private employeeService: EmployeeService = inject(EmployeeService);
  employeeForm = this.builder.group({
    name: ['', Validators.required],
    dateOfBirth: ['', Validators.required],
    city: ['', Validators.required],
    salary: [0, Validators.required],
    gender: ['', Validators.pattern('^[MFX]$')],
    email: ['', Validators.email]
  });

  constructor() {}

  get name(): AbstractControl<string> { return this.employeeForm.get('name') as AbstractControl<string>; }
  get dateOfBirth(): AbstractControl<string> { return this.employeeForm.get('dateOfBirth') as AbstractControl<string>; }
  get city(): AbstractControl<string> { return this.employeeForm.get('city') as AbstractControl<string>; }
  get salary(): AbstractControl<number> { return this.employeeForm.get('salary') as AbstractControl<number>; }
  get gender(): AbstractControl<string> { return this.employeeForm.get('gender') as AbstractControl<string>; }
  get email(): AbstractControl<string> { return this.employeeForm.get('email') as AbstractControl<string>; }

  async onSubmit() {
    if (this.employeeForm.valid) {
        const employee: Employee = new Employee(
            this.name.value,
            new Date(this.dateOfBirth.value),
            this.city.value,
            this.salary.value,
            this.gender.value,
            this.email.value
        );

        console.log('Constructed Employee:', employee); // Log employee object

        try {
            await this.employeeService.addEmployee(employee);
            console.log('Employee added successfully!');
            this.employeeForm.reset();
        } catch (error) {
            console.error('Error adding employee:', error);
        }
    } else {
        console.error('Form is invalid', this.employeeForm.errors);
    }
  }
}
