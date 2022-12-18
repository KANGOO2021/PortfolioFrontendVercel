import { Component, OnInit } from '@angular/core';
import { Acercade } from 'src/app/Models/acercade';
import { LoginService } from 'src/app/services/login.service';
import { AcercadeService } from '../../services/acercade.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {
  
acercade: Acercade[] | any;
  public user: any;
  constructor(private dataAcercade: AcercadeService, public login:LoginService) { }

  ngOnInit(): void {
    this.getData();
  
  }
  
     getData() {
  
    this.dataAcercade.getData().subscribe({
      next: data => {
        this.acercade = data;
      },
      error: e => {
        console.log(e);
      } 
    });
  }
  
  updateAcercade() { 
  this.getData()
  }

  
  

}
