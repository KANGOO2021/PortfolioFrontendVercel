import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment1 } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

url = environment1.urlServer;

    constructor(private httpClient: HttpClient) { }

    public añadirUsuario(user:any){
      return this.httpClient.post(`${this.url}usuarios/`,user);
    }

}
