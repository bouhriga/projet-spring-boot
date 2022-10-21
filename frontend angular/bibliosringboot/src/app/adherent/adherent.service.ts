import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { adherent } from './adherent';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AdherentService {
  private apiServerUrl = "http://localhost:8081";

  constructor(private http: HttpClient) { }

  public getAdherents(): Observable<adherent[]> {
    return this.http.get<any>(`${this.apiServerUrl}/Adherents`);
  }

  public addAdherent(adherent: adherent): Observable<adherent> {
    return this.http.post<adherent>(`${this.apiServerUrl}/AddAdherent`, adherent);
  }

  public updateAdherent(adherentCIN: String, adherent: adherent): Observable<adherent> {
    return this.http.put<adherent>(`${this.apiServerUrl}/UpdateAdherent/${adherentCIN}`, adherent);
  }

  public deleteAdherent(adherentCIN: String): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/DeleteAdherent/${adherentCIN}`);
  }
}
