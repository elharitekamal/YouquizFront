import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Subject} from "../models/subject";
import { SubjectRes } from '../models/subjectRes';


@Injectable({
  providedIn: 'root'
})
export class SubjectService {

    private  apiServerUrl = 'http://localhost:8080/subject';


  constructor(private http: HttpClient) { }

  public getSubject(): Observable<SubjectRes[]>{
    return this.http.get<SubjectRes[]>(`${this.apiServerUrl}`)
  }

  public findSubjectById(id: number): Observable<Subject> {
    return this.http.get<Subject>(`${this.apiServerUrl}/${id}`)
  }

   public addSubject(subject: Subject): Observable<Subject> {
    return this.http.post<Subject>(`${this.apiServerUrl}`, subject);
  }

  public updateSubject(subject: Subject): Observable<Subject> {
    return this.http.put<Subject>(`${this.apiServerUrl}/${subject.id}`, subject);
  }
  
  public deleteSubject(id: number): Observable<Subject> {
  return this.http.delete<Subject>(`${this.apiServerUrl}/${id}`);
}
}
