import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Computer } from './computer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComputerService {

  private computerUrl = "http://localhost:8081/api/computadora";

  constructor(private httpClient: HttpClient) { }

  getComputersFromApi(): Observable<Computer[]> {
    return this.httpClient.get<(Computer[])>(`${this.computerUrl}`)
  }

  postComputerFromApi(computer: Computer): Observable<Object>{
    return this.httpClient.post(`${this.computerUrl}`,computer)
  }

  putComputerFromApi(id:number,computer: Computer): Observable<Object>{
    return this.httpClient.put(`${this.computerUrl}/${id}`,computer)
  }

  getComputerByIdFromApi(id:number):Observable<Computer>{
    return this.httpClient.get<Computer>(`${this.computerUrl}/${id}`)
  }


  deleteComputerFromApi(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.computerUrl}/${id}`)
  }



}
