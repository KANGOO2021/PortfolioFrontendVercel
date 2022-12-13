import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Proyecto } from 'src/app/Models/proyectos';
import { LoginService } from 'src/app/services/login.service';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-proyectos-item',
  templateUrl: './proyectos-item.component.html',
  styleUrls: ['./proyectos-item.component.css']
})
export class ProyectosItemComponent implements OnInit {



@Input() proyecto: Proyecto = {} as Proyecto;
@Output() remove = new EventEmitter<string>();
@Output() edit = new EventEmitter<string>();


proyectosList: Proyecto[] | any;

  constructor(private dataProyectos: ProyectosService, public login:LoginService) { }

  ngOnInit(): void {
  }
  
  eliminar(id: any) {
    this.getData();
    this.remove.emit(id);
    
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
  
  
  updateProyecto() { 
  this.getData()
  this.edit.emit()
  }

}
