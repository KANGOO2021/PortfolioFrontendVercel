import { Component, OnInit } from '@angular/core';
import { Softskills } from 'src/app/Models/softskills';
import { LoginService } from 'src/app/services/login.service';

import { SoftskillsService } from 'src/app/services/softskills.service';


@Component({
  selector: 'app-softskills',
  templateUrl: './softskills.component.html',
  styleUrls: ['./softskills.component.css']
})

export class SoftskillsComponent implements OnInit {

  softskillsList: Softskills[] | any;
  
  
  constructor(private dataSoftskills: SoftskillsService, public login:LoginService) {

  }

  ngOnInit(): void {
    this.getData();
    
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
  
  
  eliminar(id: string) {
    if (confirm('¿Seguro que desea eliminar?')) {
      this.dataSoftskills.deleteData(id).subscribe({
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
