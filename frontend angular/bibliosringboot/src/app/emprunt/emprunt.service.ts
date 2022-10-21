import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { emprunt } from './emprunt';
import { environment } from 'src/environments/environment';
import { document } from "../document/document";

@Injectable({
  providedIn: 'root'
})
export class empruntService {
  private apiServerUrl = "http://localhost:8082";
  constructor(private http: HttpClient) { }

  public getemprunts(): Observable<emprunt[]> {
    return this.http.get<any>(`${this.apiServerUrl}/GetEmprunts`);
  }

  public addemprunt(emprunt: emprunt): Observable<emprunt> {
    return this.http.post<emprunt>(`${this.apiServerUrl}/AddEmprunt`, emprunt);
  }

  public updateemprunt(empruntId: number, emprunt: emprunt): Observable<emprunt> {
    return this.http.put<emprunt>(`${this.apiServerUrl}/UpdateEmprunte/${empruntId}`, emprunt);
  }

  public deleteemprunt(empruntId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/DeleteEmprunt/${empruntId}`);
  }
  public getdisponiblesemprunts(): Observable<document[]> {
    return this.http.get<any>(`http://localhost:8083/Documents_List`);
  }
}
