import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/Models/proyectos';
import { LoginService } from 'src/app/services/login.service';
import { ProyectosService } from 'src/app/services/proyectos.service';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  
  
  proyectosList: Proyecto[] | any;
  
  constructor(private dataProyectos: ProyectosService, public login:LoginService) { }

  ngOnInit(): void {
    this.getData();
  }


  getData() {
  
    this.dataProyectos.getData().subscribe({
      next: data => {
        this.proyectosList = data;
      },
      error: e => {
        console.log(e);
      }
       
    });
  }
  
  
  eliminar(id: string) {
    if (confirm('¿Seguro que desea eliminar?')) {
      this.dataProyectos.deleteData(id).subscribe({
        next: () => {
          this.getData();
          
        },
        error: e => {
          console.log(e);
          
        }
      })
    }
  }
  
  
}


