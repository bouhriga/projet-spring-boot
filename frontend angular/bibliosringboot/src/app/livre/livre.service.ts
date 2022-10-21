import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { livre } from './livre';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class livreService {
  private apiServerUrl = "http://localhost:8083";

  constructor(private http: HttpClient) { }

  public getlivres(): Observable<livre[]> {
    return this.http.get<any>(`${this.apiServerUrl}/GetLivres`);
  }

  public addlivre(livre: livre): Observable<livre> {
    return this.http.post<livre>(`${this.apiServerUrl}/AddLivre`, livre);
  }

  public updatelivre(livreId: number, livre: livre): Observable<livre> {
    return this.http.put<livre>(`${this.apiServerUrl}/UpdateLivre/${livreId}`, livre);
  }

  public deletelivre(livreId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/DeleteLivre/${livreId}`);
  }
}
