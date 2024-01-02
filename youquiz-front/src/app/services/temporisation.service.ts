import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Temporisation } from '../models/temporisation';

@Injectable({
  providedIn: 'root'
})
export class TemporisationService {

  private url = 'http://localhost:8080/api/Temporisation';
  constructor(private http: HttpClient) { }


  public getAllTestAsseigned(id: number): Observable<Temporisation[]> {
    return this.http.get<Temporisation[]>(`${this.url}/byTest/${id}`);
  }
}
