import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Validation } from '../models/validation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  private url = 'http://localhost:8080/api/Validation';

  constructor(private http: HttpClient){}

  public getResponses(id: number): Observable<Validation[]>{
    return this.http.get<Validation[]>(`${this.url}/Question/${id}`);
  }


 public getPoints(id: number): Observable<number> {
  return this.http.get<number>(`${this.url}/getPoints/${id}`);
}




}
