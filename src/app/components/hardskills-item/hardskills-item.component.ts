import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hardskills } from 'src/app/Models/hardskills';
import { HardskillsService } from 'src/app/services/hardskills.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-hardskills-item',
  templateUrl: './hardskills-item.component.html',
  styleUrls: ['./hardskills-item.component.css']
})
export class HardskillsItemComponent implements OnInit {


//padre le pasa al componente hijo
@Input() skill: Hardskills = {} as Hardskills;

//hijo le pasa al padre el evento(eliminar(id))
@Output() remove = new EventEmitter<string>();

//componente hijo le pasa al padre(softskill) con Output
@Output() edit = new EventEmitter<string>();


hardskillsList: Hardskills[] | any;

  constructor(private dataHardskills: HardskillsService, public login:LoginService) { }

  ngOnInit(): void {
  }
  
  getData() {
  
    this.dataHardskills.getData().subscribe({
      next: data => {
        this.hardskillsList = data;
      },
      error: e => {
        console.log(e);
      } 
    });
  }
  
  eliminar(id: string) {
  
    this.remove.emit(id);
    
  }
  
  updateHardskill() { 
  this.getData()
  this.edit.emit()
  }

}
