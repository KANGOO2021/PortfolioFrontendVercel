import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Educacion } from 'src/app/Models/educacion';
import { EducacionService } from 'src/app/services/educacion.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-educacion-item',
  templateUrl: './educacion-item.component.html',
  styleUrls: ['./educacion-item.component.css']
})
export class EducacionItemComponent implements OnInit {


@Input() educa: Educacion = {} as Educacion;
@Output() remove = new EventEmitter<string>();
@Output() edit = new EventEmitter<string>();
  
 educacionList: Educacion[] | any;
 
  constructor(private dataEducacion: EducacionService, public login:LoginService) {
  
  }

  ngOnInit(): void {}
  
  getData() {
  
    this.dataEducacion.getData().subscribe({
      next: data => {
        this.dataEducacion = data;
      },
      error: e => {
        console.log(e);
      } 
    });
  }
  
  
  eliminar(id: any) {
  
    this.remove.emit(id);
    
  }
  
  updateEducacion() { 
  this.getData()
  this.edit.emit()
  }
  
  
}
