import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment1 } from 'src/environments/environment';
import { Hardskills } from '../Models/hardskills';



@Injectable({
  providedIn: 'root'
})
export class HardskillsService {


url = environment1.urlServer;

  constructor(private http: HttpClient) { }
  
  
getData(): Observable<any> {
    
    return this.http.get(`${this.url}hardskills/traer`)
   
}
  
getOne(id: string): Observable<Hardskills> {
  
    return this.http.get<Hardskills>(`${this.url}hardskills/traer/` + id)
   
}
  
  
addData(sskills: Hardskills): Observable<any> {

    return this.http.post(`${this.url}hardskills/crear`, sskills)

}
  
  
deleteData(id: string): Observable<any> {

  return this.http.delete(`${this.url}hardskills/borrar/` + id)
   
}
  
updateData(sskills: Hardskills): Observable<any> {

  return this.http.put(`${this.url}hardskills/actualizar`, sskills)
   
}
  
}
