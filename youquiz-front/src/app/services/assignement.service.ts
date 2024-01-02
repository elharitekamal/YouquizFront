import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { AssignementRes } from '../models/assignementRes';
import { Assignement } from '../models/assignement';


@Injectable({
  providedIn: 'root'
})
export class AssignementService {

    private  apiServerUrl = 'http://localhost:8080/api/Validation';


  constructor(private http: HttpClient) { }

  public getAssignement(): Observable<AssignementRes[]>{
    return this.http.get<AssignementRes[]>(`${this.apiServerUrl}`)
  }

  public addAssignement(assignement: Assignement): Observable<Assignement> {
    return this.http.post<Assignement>(`${this.apiServerUrl}`, assignement);
  }

  public deleteAssignement(id: number): Observable<AssignementRes> {
  return this.http.delete<AssignementRes>(`${this.apiServerUrl}/${id}`);
}



}
