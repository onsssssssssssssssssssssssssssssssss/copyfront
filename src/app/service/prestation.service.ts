import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prestation } from '../class/prestation';
import { environment } from 'src/environments/environment';
const basePath= environment.basePath
@Injectable({
  providedIn: 'root'
})
export class PrestationService {

  private baseUrl='/prestations'

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  
  getPrestationList(): Observable<Prestation> {
    return this.http.get<Prestation>(basePath + this.baseUrl );
  }


  getPrestation(id: number): Observable<Object> {
    return this.http.get(`${basePath + this.baseUrl}/${id}`);
  }

  createPrestation(Prestation: Object): Observable<Object> {
    return this.http.post(`${basePath + this.baseUrl}`, Prestation);
  }


  updatePrestation(id: number, value: Object): Observable<Object> {
    return this.http.put(`${basePath + this.baseUrl}/${id}`, value);
  }

  deletePrestation(id: number): Observable<Object> {
    return this.http.delete(`${basePath + this.baseUrl}/${id}`, { responseType: 'text' });
  }
  

}
