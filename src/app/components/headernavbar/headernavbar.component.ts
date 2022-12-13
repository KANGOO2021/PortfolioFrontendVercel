import { Component, OnInit } from '@angular/core';
import { Perfil } from 'src/app/Models/perfil';
import { LoginService } from 'src/app/services/login.service';
import { PerfilService } from 'src/app/services/perfil.service';


@Component({
  selector: 'app-headernavbar',
  templateUrl: './headernavbar.component.html',
  styleUrls: ['./headernavbar.component.css']
})
export class HeadernavbarComponent implements OnInit {

 
  perfilList: Perfil[] | any;
  
  isLoggedIn = false;
  user:any = null;
  
  
  constructor(private dataPerfil: PerfilService, public login:LoginService) { }

  ngOnInit(): void {
  this.getData();
   
  
   this.isLoggedIn = this.login.isLoggedIn();
    this.user = this.login.getUser();
    this.login.loginStatusSubjec.asObservable().subscribe(
      data => {
        this.isLoggedIn = this.login.isLoggedIn();
        this.user = this.login.getUser();
      }
    )
   
  }
  
  getData() {
  
    if (this.login.isLoggedIn()) {
      this.dataPerfil.getData().subscribe({
        next: data => {
          this.perfilList = data;
        },
        error: e => {
          console.log(e);
        }
      });
    }else{{}}
  }

  updatePerfil() { 
  this.getData()

  }
  
   public logout(){
    this.login.logout();
    window.location.href = '/miportfolio';
 
  }

}
