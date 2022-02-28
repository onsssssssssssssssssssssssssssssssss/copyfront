import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { site } from '../classe/site';
import { environment } from 'src/environments/environment';
const basePath= environment.basePath
@Injectable({
  providedIn: 'root'
})
export class siteService {
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


getSiteByCode(code: string): Observable<site> {
     
   
  return this.http.get<site>(`${basePath}/sites/byCode?code=${code}` );
}

getheight( height :number) {
  return this.http.get(`${basePath}/sites/byheight?height=${height}` );

}

searchDossier(form: any): Observable<any> {
  let params= new HttpParams();

  params.append('eb',form.eb)
  params.append('numcommande',form.numcommande)
  params.append('codesite',form.code)
  params.append('codeclient',form.typ)
  let org:string ="" , acc :string="",typ:string="" 
  
  if(typeof form.code!='undefined' && form.code){
    org=form.code
  }
  if(typeof form.numcommande!='undefined' && form.numcommande){
    acc=form.numcommande
  }
  if(typeof form.codeclient!='undefined' && form.codeclient){
    typ=form.codeclient
  }
 // console('${basePath}/dossiers/searchDossier?payOrg=${org}&payAcc=${acc}&typ=${typ}&etat=${form.etat}')
  return this.http.get<site>(`${basePath}/sites/searchDossier?eb=${org}&numcommande=${acc}&codeclient=${typ}&codesite=${form.code}` );
 // return this.http.get<any>(basePath + this.baseUrl+'/searchDossier',{params})
}

 
  
     
    }

