import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { Softskills } from 'src/app/Models/softskills';
import { SoftskillsService } from 'src/app/services/softskills.service';

@Component({
  selector: 'app-softskilledit',
  templateUrl: './softskilledit.component.html',
  styleUrls: ['./softskilledit.component.css']
})

export class SoftskilleditComponent implements OnInit {


@Input() skill: Softskills = {} as Softskills;
@Output() update = new EventEmitter<string>();
 
 softskillsList: Softskills[] = [];
 
 
    id: any = '';
    softskillForm= new FormGroup({
    titulo: new FormControl(''),
    porcentaje: new FormControl('')
    
    })
   
  
  constructor(private dataSoftskills: SoftskillsService) { }
 
  ngOnInit(): void {
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
  
 

getdataId(id: any) {
  
    this.dataSoftskills.getOne(id).subscribe(res => {
    
    console.log(res);
    
    const{ id, titulo, porcentaje} = res;
    this.id = id;
    this.softskillForm.patchValue({titulo});
    this.softskillForm.patchValue({porcentaje});
   
  
      })
       
  }
  
  updateSoftskill(){
    let obj = this.softskillForm.value
    obj.id = this.id
    this.dataSoftskills.updateData(obj).subscribe(() => {
      this.getData()
      this.softskillForm.reset('')
      this.update.emit(); 
    })
  
  }
  

  
  
 
  
}

 


