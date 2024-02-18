import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BedandbreakfastService {

  constructor(private http: HttpClient) { }

  // GET http://localhost:8080/api/suburbs
  searchSuburbs(): Observable<string[]> {
    return this.http.get<string[]>('http://localhost:8080/api/suburbs');
  }


}
