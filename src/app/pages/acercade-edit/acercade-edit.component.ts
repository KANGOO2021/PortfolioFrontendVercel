import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Acercade } from 'src/app/Models/acercade';
import { AcercadeService } from '../../services/acercade.service';

@Component({
  selector: 'app-acercade-edit',
  templateUrl: './acercade-edit.component.html',
  styleUrls: ['./acercade-edit.component.css']
})


export class AcercadeEditComponent implements OnInit {


@Input() acerca: Acercade = {} as Acercade;
@Output() update = new EventEmitter<string>();

    acercade: Acercade[] | any;

    id=''
    acercadeForm= new FormGroup({
    info: new FormControl('')
    })
    
  constructor(private dataAcercade: AcercadeService) { }

  ngOnInit(): void {}
  
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
  
   getdataId(id: any) {
  
    this.dataAcercade.getOne(id).subscribe(res => {
    /* console.log(res); */
    const{ id, info} = res;
    this.id = id;
    this.acercadeForm.patchValue({info})
  
      })
       
  }
  
  updateAcercade(){
    let obj = this.acercadeForm.value
    //console.log(obj);
    obj.id = this.id
    //let acerca = new Acercade(+this.id, obj.info)
    this.dataAcercade.updateData(obj).subscribe(() => {
      this.getData()
      this.acercadeForm.reset('')
      this.update.emit(); 
    })
  
  }


}
