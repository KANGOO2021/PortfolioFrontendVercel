import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Softskills } from 'src/app/Models/softskills';
import { SoftskillsService } from 'src/app/services/softskills.service';

@Component({
  selector: 'app-softskilladd',
  templateUrl: './softskilladd.component.html',
  styleUrls: ['./softskilladd.component.css']
})
export class SoftskillAddComponent implements OnInit {


  @Output() add = new EventEmitter<any>();

  addskillForm: FormGroup;
  
  constructor( private fb: FormBuilder,
               private router: Router,
               private dataSoftskills: SoftskillsService) {
  
  this.addskillForm = this.fb.group({
      titulo: ['', Validators.required],
      porcentaje: ['', Validators.required]
      
    })
   
  }
   
  ngOnInit(): void {}
  

  getSskills() {

      const data: Softskills = {
      titulo: this.addskillForm.get('titulo')?.value,
      porcentaje: this.addskillForm.get('porcentaje')?.value
     
    
    }
    
      this.dataSoftskills.addData(data).subscribe({
      next: () => {
      this.dataSoftskills.getData();
      this.addskillForm.reset()
      this.add.emit();  
          
        },
        error: e => {
          console.log(e);
          
        }
      })
 
  }
  

}
