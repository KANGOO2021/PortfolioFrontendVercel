import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Hardskills } from 'src/app/Models/hardskills';
import { HardskillsService } from 'src/app/services/hardskills.service';

@Component({
  selector: 'app-hardskilledit',
  templateUrl: './hardskilledit.component.html',
  styleUrls: ['./hardskilledit.component.css']
})
export class HardskilleditComponent implements OnInit {


@Input() skill: Hardskills = {} as Hardskills;
@Output() update = new EventEmitter<string>();
 
 hardskillsList: Hardskills[] = [];
 
   id: any = '';
    hardskillForm= new FormGroup({
    titulo: new FormControl(''),
    porcentaje: new FormControl(''),
    color: new FormControl('')
    
    })

  constructor(private dataHardskills: HardskillsService) { }

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
  
 

getdataId(id: any) {
  
    this.dataHardskills.getOne(id).subscribe(res => {
    
    console.log(res);
    
    const{ id, titulo, porcentaje, color} = res;
    this.id = id;
    this.hardskillForm.patchValue({titulo});
    this.hardskillForm.patchValue({porcentaje});
    this.hardskillForm.patchValue({color});
   
  
      })
       
  }
  
  updateHardskill(){
    let obj = this.hardskillForm.value
    obj.id = this.id
    this.dataHardskills.updateData(obj).subscribe(() => {
      this.getData()
      this.hardskillForm.reset('')
      this.update.emit(); 
    })
  
  }

}
