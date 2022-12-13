import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment1 } from 'src/environments/environment';
import { Proyecto } from '../Models/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

url = environment1.urlServer;

  constructor(private http: HttpClient) { }
  
getData(): Observable<any> {
    
    return this.http.get(`${this.url}proyectos/traer`)
   
}
  
getOne(id: string): Observable<Proyecto> {
  
    return this.http.get<Proyecto>(`${this.url}proyectos/traer/` + id)
   
}
  
  
addData(proyecto: Proyecto): Observable<any> {

    return this.http.post(`${this.url}proyectos/crear`, proyecto)

}
  
  
deleteData(id: string): Observable<any> {

  return this.http.delete(`${this.url}proyectos/borrar/` + id)
   
}
  
updateData(proyecto: Proyecto): Observable<any> {

  return this.http.put(`${this.url}proyectos/actualizar`, proyecto)
   
}

}
