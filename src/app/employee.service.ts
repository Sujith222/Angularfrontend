import { Employee } from './employee';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = "http://localhost:8080/api/v1/employees";

  constructor(private _httpClient:HttpClient) { }

  getEmployeesList():Observable<Employee[]>{
    return this._httpClient.get<Employee[]>(`${this.baseUrl}`);
  }

  createEmployee(employee:Employee):Observable<Object>{
    return this._httpClient.post(`${this.baseUrl}`,employee);
  }

  getEmployeeById(id:any):Observable<Object>{
    return this._httpClient.get<Employee>(`${this.baseUrl}/${id}`);
  }

  updateEmployee(id:number,employee:Employee):Observable<Object>{
    return this._httpClient.put(`${this.baseUrl}/${id}`,employee);
  }

  deleteEmployee(id:number):Observable<Object>{
    return this._httpClient.delete(`${this.baseUrl}/${id}`);
  }

}
