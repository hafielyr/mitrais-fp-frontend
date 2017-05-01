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
  getEmployee(employeeId):Observable<Employee> {
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

  update(employee:Employee,id){
    let url= "/api/employees/"+id;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.put(url,JSON.stringify(employee),options)
    .map(response=>{});
  }
  sortasc():Observable<Employee[]>{
    let url="/api/employees/sortasc";
    return this.http.get(url)
    .map(response=>response.json());
  }
  sortdesc():Observable<Employee[]>{
    let url="/api/employees/sortdesc";
    return this.http.get(url)
    .map(response=>response.json());
  }
  getEmployeesBySearchParameter(name):Observable<Employee[]>{
    let url=`/api/employees/search?name=${name.target.value}`;
    let searchParameter=new URLSearchParams();
    searchParameter.append('name',name.target.value);
    return this.http.get(url, { search: searchParameter })
    .map(response=>response.json());
  }
  getFilteredEmployees(locationId,gender){
    if(locationId===""){
      locationId="null";
    }
    if(gender===""){
      gender="null";
    }
    let url=`/api/employees/filter?gender=${gender}&locationId=${locationId}`;
    let searchParameter=new URLSearchParams();
    searchParameter.append('gender',gender);
    searchParameter.append('locationId',locationId);
    return this.http.get(url,{search:searchParameter})
    .map(response=>{
      return response.json();
    });
  }
}
