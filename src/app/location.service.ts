import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from "rxjs/Observable";
import { Location } from './location.model';
@Injectable()
export class LocationService {

  constructor(private http: Http) { }
  get() :Observable<Location[]>{
    let url = "/api/locations";
    return this.http.get(url)
      .map(response => 
        response.json());
  }
}
