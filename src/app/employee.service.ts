import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employeeCollection = collection(this.firestore, 'employees');

  constructor(private firestore: Firestore) {}

  addEmployee(employee: Employee) {
    return addDoc(this.employeeCollection, {
      name: employee.name,
      dateOfBirth: employee.dateOfBirth,
      city: employee.city,
      salary: employee.salary,
      gender: employee.gender,
      email: employee.email
    });
  }
}