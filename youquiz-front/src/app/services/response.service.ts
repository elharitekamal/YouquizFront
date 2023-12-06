import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

import { Answer } from '../models/answer';


@Injectable({
  providedIn: 'root'
})
export class ResponseService {

    private  apiServerUrl = 'http://localhost:8080/api/Response';

  constructor(private http: HttpClient) { }

   public getResponse(): Observable<Answer[]>{
    return this.http.get<Answer[]>(`${this.apiServerUrl}`)
  }

  public findResponseById(id: number): Observable<Answer> {
    return this.http.get<Answer>(`${this.apiServerUrl}/${id}`)
  }

   public addResponse(Response: Answer): Observable<Answer> {
    return this.http.post<Answer>(`${this.apiServerUrl}`, Response);
  }

  public updateResponse(response: Answer): Observable<Answer> {
    return this.http.put<Answer>(`${this.apiServerUrl}/${response.id}`, response);
  }
  

 public deleteResponse(id: number): Observable<Answer> {
  return this.http.delete<Answer>(`${this.apiServerUrl}/${id}`);
}
}
