import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { QuestionRes } from '../models/questionRes';
import { QuestionReq } from '../models/responseReq';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private  apiServerUrl = 'http://localhost:8080/Question';

  constructor(private http:HttpClient) { }


 getQuestion(): Observable<QuestionRes[]> {
    return this.http.get<QuestionRes[]>(`http://localhost:8080/Question`);
  }

  addQuestion(question: QuestionReq): Observable<QuestionReq> {
    return this.http.post<QuestionReq>(`http://localhost:8080/Question`, question).pipe(
    );
  }


  public deleteQuestion(id: number): Observable<QuestionRes> {
  return this.http.delete<QuestionRes>(`${this.apiServerUrl}/${id}`);
}


}
