import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Laboratory } from './laboratory';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LaboratoryService {


  private laboratoryUrl = "http://localhost:8081/api/laboratorio";


  constructor(private httpClient: HttpClient) { }

  getLaboratoriesFromApi(): Observable<Laboratory[]> {
    return this.httpClient.get<(Laboratory[])>(`${this.laboratoryUrl}`)
  }


  postLaboratoryFromApi(laboratory: Laboratory): Observable<Object>{
    return this.httpClient.post(`${this.laboratoryUrl}`,laboratory)
  }


  putLaboratoryFromApi(id:number,laboratory: Laboratory): Observable<Object>{
    return this.httpClient.put(`${this.laboratoryUrl}/${id}`,laboratory)
  }

  getLaboratoryByIdFromApi(id:number):Observable<Laboratory>{
    return this.httpClient.get<Laboratory>(`${this.laboratoryUrl}/${id}`)
  }


  deleteLaboratoryFromApi(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.laboratoryUrl}/${id}`)
  }












}
