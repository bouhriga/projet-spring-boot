import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { document } from './document';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class documentService {
  private apiServerUrl = "http://localhost:8083";
  constructor(private http: HttpClient) { }

  public GetDocuments(): Observable<document[]> {
    return this.http.get<any>(`${this.apiServerUrl}/GetDocuments`);
  }


  }

