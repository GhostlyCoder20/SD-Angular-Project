import { Injectable } from '@angular/core';
import { Maintenance } from './maintenance';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MaintenanceService {

  private maintenanceUrl = "http://localhost:8081/api/mantenimiento";

  constructor(private httpClient: HttpClient) { }


  getMaintenanceFromApi(): Observable<Maintenance[]> {
    return this.httpClient.get<(Maintenance[])>(`${this.maintenanceUrl}`)
  }


  postMaintenanceFromApi(maintenance: Maintenance): Observable<Object>{
    return this.httpClient.post(`${this.maintenanceUrl}`,maintenance)
  }


  putMaintenanceFromApi(id:number,maintenance: Maintenance): Observable<Object>{
    return this.httpClient.put(`${this.maintenanceUrl}/${id}`,maintenance)
  }

  getMaintenanceByIdFromApi(id:number):Observable<Maintenance>{
    return this.httpClient.get<Maintenance>(`${this.maintenanceUrl}/${id}`)
  }


  deleteMaintenanceFromApi(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.maintenanceUrl}/${id}`)
  }
}
