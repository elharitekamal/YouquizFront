import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Test } from '../models/test';
import { Observable } from 'rxjs';
import { Temporisation } from '../models/temporisation';


@Injectable({
  providedIn: 'root'
})
export class TestService {

  private url = 'http://localhost:8080/api/Test';
  constructor(private http: HttpClient) { }


  public getAllTest(): Observable<Test>{
    return this.http.get<Test>(`${this.url}`);
  }
}
