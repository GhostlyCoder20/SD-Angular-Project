import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Diagnostic } from './diagnostic';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiagnosesService {


  private diagnosticUrl = "http://localhost:8081/api/diagnostico";

  constructor(private httpClient: HttpClient) { }

  getDiagnosticFromApi(): Observable<Diagnostic[]> {
    return this.httpClient.get<(Diagnostic[])>(`${this.diagnosticUrl}`)
  }


  postDiagnosticFromApi(diagnostic: Diagnostic): Observable<Object>{
    return this.httpClient.post(`${this.diagnosticUrl}`,diagnostic)
  }


  putDiagnosticFromApi(id:number,diagnostic: Diagnostic): Observable<Object>{
    return this.httpClient.put(`${this.diagnosticUrl}/${id}`,diagnostic)
  }

  getDiagnosticByIdFromApi(id:number):Observable<Diagnostic>{
    return this.httpClient.get<Diagnostic>(`${this.diagnosticUrl}/${id}`)
  }


  deleteDiagnosticFromApi(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.diagnosticUrl}/${id}`)
  }

}
