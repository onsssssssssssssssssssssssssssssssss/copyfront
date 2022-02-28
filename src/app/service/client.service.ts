import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { clients } from '../classe/clients';
import { environment } from 'src/environments/environment';
const basePath= environment.basePath
@Injectable({
  providedIn: 'root'
})
export class ClientService {
 
  private baseUrl='/clients'

 
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
getclientList(): Observable<clients> {
  return this.http.get<clients>(basePath + this.baseUrl );
}
getById(id:Number){
  return this.http.get(`${basePath + this.baseUrl}/${id}`);

}
//deleteClient(id: number): Observable<any> {
 // return this.http.delete(`${basePath}/clients/?id=${id}`);
  //}

  deleteClient(clients:clients){
    return this.http.delete<clients>(this.baseUrl);
    }
}
