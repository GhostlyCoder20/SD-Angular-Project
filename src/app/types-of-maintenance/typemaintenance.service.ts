import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Typemaintenance } from './typemaintenance';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypemaintenanceService {

  private typeMaintenanceUrl = "http://localhost:8081/api/tipomantenimiento";

  constructor(private httpClient: HttpClient) { }

  getTypesMaintenanceFromApi(): Observable<Typemaintenance[]> {
    return this.httpClient.get<(Typemaintenance[])>(`${this.typeMaintenanceUrl}`)
  }


  postTypeMaintenanceFromApi(typeMaintenance: Typemaintenance): Observable<Object>{
    return this.httpClient.post(`${this.typeMaintenanceUrl}`,typeMaintenance)
  }


  putTypeMaintenanceFromApi(id:number,typeMaintenance: Typemaintenance): Observable<Object>{
    return this.httpClient.put(`${this.typeMaintenanceUrl}/${id}`,typeMaintenance)
  }

  getTypeMaintenanceByIdFromApi(id:number):Observable<Typemaintenance>{
    return this.httpClient.get<Typemaintenance>(`${this.typeMaintenanceUrl}/${id}`)
  }


  deleteTypeMaintenanceFromApi(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.typeMaintenanceUrl}/${id}`)
  }






}
