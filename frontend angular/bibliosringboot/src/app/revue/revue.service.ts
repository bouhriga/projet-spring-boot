import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { revue } from './revue';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class revueService {
  private apiServerUrl = "http://localhost:8083";
  constructor(private http: HttpClient) { }

  public getrevues(): Observable<revue[]> {
    return this.http.get<any>(`${this.apiServerUrl}/GetRevues`);
  }

  public addrevue(revue: revue): Observable<revue> {
    return this.http.post<revue>(`${this.apiServerUrl}/AddRevue`, revue);
  }

  public updaterevue(revueId: number, revue: revue): Observable<revue> {
    return this.http.put<revue>(`${this.apiServerUrl}/UpdateRevue/${revueId}`, revue);
  }

  public deleterevue(revueId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/DeleteRevue/${revueId}`);
  }
}
