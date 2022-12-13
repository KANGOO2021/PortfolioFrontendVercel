import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment1 } from 'src/environments/environment';
import { Perfil } from '../Models/perfil';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

url = environment1.urlServer;

  constructor(private http: HttpClient) { }
  
  
getData(): Observable<any> {
    
    return this.http.get(`${this.url}perfil/traer`)
   
}
  
getOne(id: string): Observable<Perfil> {
  
    return this.http.get<Perfil>(`${this.url}perfil/traer/` + id)
   
}
  
  
addData(perfil: Perfil): Observable<any> {

    return this.http.post(`${this.url}perfil/crear`, perfil)

}
  
  
deleteData(id: string): Observable<any> {

  return this.http.delete(`${this.url}perfil/borrar/` + id)
   
}
  
updateData(perfil: Perfil): Observable<any> {

  return this.http.put(`${this.url}perfil/actualizar`, perfil)
   
}
  
}
