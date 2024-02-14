import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  jsonServerUrl : string = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  // In this case we didn't create an Interface(object) for this. If did, we can use the Employee obj instead of any.
  addEmployee(data: any) : Observable<any> {
    return this.httpClient.post(this.jsonServerUrl + "/employees", data);
  }

  deleteEmployee(id: number) : Observable<any> {
    return this.httpClient.delete(this.jsonServerUrl + `/employees/${id}`); // Note: using back ticks here. Why? Allows us to access whatever is inside {}.
  }

  getEmployees(): Observable<any> {
    return this.httpClient.get(this.jsonServerUrl + "/employees");
  }

  updateEmployee(id: number, data: any) : Observable<any> {
    return this.httpClient.put(this.jsonServerUrl + `/employees/${id}`, data); // Data contains the updated employee info.
  }

}
