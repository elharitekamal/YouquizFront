import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnswerEtudiant } from '../models/answerEtudiant';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
private  apiServerUrl = 'http://localhost:8080/api/Answer';

  constructor(private http: HttpClient) {
  }


  public addAnswerEtudiant(answerEtudiant: AnswerEtudiant ): Observable<AnswerEtudiant> {
    return this.http.post<AnswerEtudiant>(`${this.apiServerUrl}`, answerEtudiant);
  }
}
