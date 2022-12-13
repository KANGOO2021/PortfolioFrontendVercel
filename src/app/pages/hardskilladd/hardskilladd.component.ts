import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Hardskills } from 'src/app/Models/hardskills';
import { HardskillsService } from 'src/app/services/hardskills.service';

@Component({
  selector: 'app-hardskilladd',
  templateUrl: './hardskilladd.component.html',
  styleUrls: ['./hardskilladd.component.css']
})
export class HardskilladdComponent implements OnInit {

  @Output() add = new EventEmitter<any>();

  addskillForm: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router,
    private dataHardskills: HardskillsService) {
                 
    this.addskillForm = this.fb.group({
      titulo: ['', Validators.required],
      porcentaje: ['', Validators.required],
      color: ['', Validators.required]
      
    })
    
  }

  ngOnInit(): void {
  }
  
 
  getSskills() {

    const data: Hardskills = {
      titulo: this.addskillForm.get('titulo')?.value,
      porcentaje: this.addskillForm.get('porcentaje')?.value,
      color: this.addskillForm.get('color')?.value,
    
    }
    
    this.dataHardskills.addData(data).subscribe({
      next: () => {
        this.dataHardskills.getData();
        this.addskillForm.reset()
        this.add.emit();
          
      },
      error: e => {
        console.log(e);
          
      }
    })

  }
}
