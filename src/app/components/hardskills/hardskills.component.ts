import { Component, OnInit } from '@angular/core';
import { Hardskills } from 'src/app/Models/hardskills';
import { HardskillsService } from 'src/app/services/hardskills.service';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-hardskills',
  templateUrl: './hardskills.component.html',
  styleUrls: ['./hardskills.component.css']
})
export class HardskillsComponent implements OnInit {

  hardskillsList: Hardskills[] | any;
  
  
  constructor(private dataHardkills: HardskillsService, public login:LoginService) { }

  ngOnInit(): void {
  
   this.getData();
  }
  
  getData() {
  
    this.dataHardkills.getData().subscribe({
      next: data => {
        this.hardskillsList = data;
      },
      error: e => {
        console.log(e);
      }
       
    });
  }
  
  
  eliminar(id: string) {
    if (confirm('¿Seguro que desea eliminar?')) {
      this.dataHardkills.deleteData(id).subscribe({
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
