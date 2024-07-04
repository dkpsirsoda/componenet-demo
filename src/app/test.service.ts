import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  

  private _url: string = "/assets/employee.json";

  constructor(private http:HttpClient) { }

  getEmployeeList() : Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url);
  }

}
