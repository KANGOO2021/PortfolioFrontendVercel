import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { environment1 } from 'src/environments/environment';
import { Softskills } from '../Models/softskills';


@Injectable({
  providedIn: 'root'
})
export class SoftskillsService {

url = environment1.urlServer;

  constructor(private http: HttpClient) { }
  
  

getData(): Observable<any> {
    
    return this.http.get(`${this.url}softskills/traer`)
    
   
  }
  
getOne(id: string): Observable<Softskills> {
  
    return this.http.get<Softskills>(`${this.url}softskills/traer/` + id)
   
  }
  
  
addData(sskills: Softskills): Observable<any> {

    return this.http.post(`${this.url}softskills/crear`, sskills)

  }
  
  
deleteData(id: string): Observable<any> {

  return this.http.delete(`${this.url}softskills/borrar/` + id)
   
  }
  
updateData(sskills: Softskills): Observable<any> {

  return this.http.put(`${this.url}softskills/actualizar`, sskills)
   
  }
  
}
