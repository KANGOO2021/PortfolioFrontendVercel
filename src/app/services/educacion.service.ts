import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment1 } from 'src/environments/environment';
import { Educacion } from '../Models/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {


url = environment1.urlServer;

  constructor(private http: HttpClient) { }
  
  
getData(): Observable<any> {
    
    return this.http.get(`${this.url}educacion/traer`)
   
}
  
getOne(id: string): Observable<Educacion> {
  
    return this.http.get<Educacion>(`${this.url}educacion/traer/` + id)
   
}
  
  
addData(educa: Educacion): Observable<any> {

    return this.http.post(`${this.url}educacion/crear`, educa)

}
  
  
deleteData(id: string): Observable<any> {

  return this.http.delete(`${this.url}educacion/borrar/` + id)
   
}
  
updateData(educa: Educacion): Observable<any> {

  return this.http.put(`${this.url}educacion/actualizar`, educa)
   
}
  
}
