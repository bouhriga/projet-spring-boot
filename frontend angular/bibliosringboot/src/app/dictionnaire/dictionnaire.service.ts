import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { dictionnaire } from './dictionnaire';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class dictionnaireService {
  private apiServerUrl = "http://localhost:8083";
  constructor(private http: HttpClient) { }

  public getdictionnaires(): Observable<dictionnaire[]> {
    return this.http.get<any>(`${this.apiServerUrl}/GetDictionnaires`);
  }

  public adddictionnaire(dictionnaire: dictionnaire): Observable<dictionnaire> {
    return this.http.post<dictionnaire>(`${this.apiServerUrl}/AddDictionnaire`, dictionnaire);
  }

  public updatedictionnaire(dictionnaireId: number, dictionnaire: dictionnaire): Observable<dictionnaire> {
    return this.http.put<dictionnaire>(`${this.apiServerUrl}/UpdateDictionnaire/${dictionnaireId}`, dictionnaire);
  }

  public deletedictionnaire(dictionnaireId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/DeleteDictionnaire/${dictionnaireId}`);
  }
}
