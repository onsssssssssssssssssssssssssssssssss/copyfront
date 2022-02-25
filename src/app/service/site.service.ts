import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { environment } from 'src/environments/environment';
import { site } from "../classe/site";
const basePath= environment.basePath
@Injectable({
    providedIn: 'root'
})
export class siteservice{
    private baseUrl='/sites'
    constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  getsiteList(): Observable<site> {
    return this.http.get<site>(basePath + this.baseUrl );
  }
  
  
  
  
}