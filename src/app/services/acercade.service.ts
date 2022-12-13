import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Acercade } from '../Models/acercade';
import { environment1 } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class AcercadeService {

url = environment1.urlServer;

  constructor(private http: HttpClient) { }
  
  
getData():Observable<any>{ 
    
    return this.http.get(`${this.url}acercade/traer`);
  }
  
  
getOne(id: string): Observable<any> {
  
    return this.http.get(`${this.url}acercade/traer/` + id)
   
  }
  
addData(acerca: Acercade): Observable<any> {

    return this.http.post(`${this.url}acercade/crear`, acerca)

  }
  
  
deleteData(id: string): Observable<any> {

  return this.http.delete(`${this.url}acercade/borrar/` + id)
   
  }
  
updateData(acerca: Acercade): Observable<any> {

  return this.http.put(`${this.url}acercade/actualizar`, acerca)
   
  }
  
}
