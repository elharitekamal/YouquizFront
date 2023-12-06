import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {Level} from "../models/level";

@Injectable({
  providedIn: 'root'
})
export class LevelService {
  private  apiServerUrl = 'http://localhost:8080/api/v1/level';

  constructor(private http: HttpClient) {
  }

  public getLevel(): Observable<Level[]>{
    return this.http.get<Level[]>(`${this.apiServerUrl}`)
  }

  public findLevelById(id: number): Observable<Level> {
    return this.http.get<Level>(`${this.apiServerUrl}/${id}`)
  }

   public addLevel(level: Level): Observable<Level> {
    return this.http.post<Level>(`${this.apiServerUrl}`, level);
  }

  public updateLevel(level: Level): Observable<Level> {
    return this.http.put<Level>(`${this.apiServerUrl}/${level.id}`, level);
  }
  
  public deleteLevel(id: number): Observable<Level> {
  return this.http.delete<Level>(`${this.apiServerUrl}/${id}`);
}



}
