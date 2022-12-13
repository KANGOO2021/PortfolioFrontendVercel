import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Softskills } from 'src/app/Models/softskills';
import { LoginService } from 'src/app/services/login.service';
import { SoftskillsService } from 'src/app/services/softskills.service';


@Component({
  selector: 'app-softskills-item',
  templateUrl: './softskills-item.component.html',
  styleUrls: ['./softskills-item.component.css']
})
export class SoftskillsItemComponent implements OnInit {


@Input() skill: Softskills = {} as Softskills;
@Output() remove = new EventEmitter<string>();
@Output() edit = new EventEmitter<string>();


    softskillsList: Softskills[] | any;

  constructor(private dataSoftskills: SoftskillsService, public login:LoginService) { 
  }

  ngOnInit(): void {
  }
  
  
  eliminar(id: any) {
    this.getData();
    this.remove.emit(id);
    
  }
  
  getData() {
  
    this.dataSoftskills.getData().subscribe({
      next: data => {
        this.softskillsList = data;
      },
      error: e => {
        console.log(e);
      } 
    });
  }
  
  
  updateSoftskill() { 
  this.getData()
  this.edit.emit()
  }


}
