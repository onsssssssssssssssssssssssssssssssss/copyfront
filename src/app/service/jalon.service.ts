import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jalon } from '../class/jalon';
import { environment } from 'src/environments/environment';
const basePath= environment.basePath
@Injectable({
  providedIn: 'root'
})
export class JalonService {

  private baseUrl='/jalons'

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  
  getJalonList(): Observable<Jalon> {
    return this.http.get<Jalon>(basePath + this.baseUrl );
  }


  getJalon(id: number): Observable<Object> {
    return this.http.get(`${basePath + this.baseUrl}/${id}`);
  }

  createJalon(Jalon: Object): Observable<Object> {
    return this.http.post(`${basePath + this.baseUrl}`, Jalon);
  }


  updateJalon(id: number, value: Object): Observable<Object> {
    return this.http.put(`${basePath + this.baseUrl}/${id}`, value);
  }

  deleteJalon(id: number): Observable<Object> {
    return this.http.delete(`${basePath + this.baseUrl}/${id}`, { responseType: 'text' });
  }
  getJalonByPrest(prestId: number): Observable<Jalon> {   
    return this.http.get<Jalon>(`${basePath}/jalons/byPrest?prestId=${prestId}` );


  }

}
