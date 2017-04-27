import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from "rxjs/Observable";
import {Employee} from './employee.model';
@Injectable()
export class EmployeeService {

  constructor(private http: Http) {}

  get() :Observable<Employee[]>{
    let url = "/api/employees";
    return this.http.get(url)
      .map(response => 
        response.json());
  }
  getEmployee(employeeId) {
    let url= "/api/employees/"+employeeId;
    return this.http.get(url).map(response=>{
      return response.json()
    });
  }
  add(employee) {
    let url = "/api/employees";
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(url, JSON.stringify(employee),options)
      .map(response => {});
  }
  
  delete(employeeId) {
    let url= "/api/employees/"+employeeId;
    return this.http.delete(url)
      .map(response => {});
  }

}
