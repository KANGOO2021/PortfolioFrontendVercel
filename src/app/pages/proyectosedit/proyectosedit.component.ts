import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Proyecto } from 'src/app/Models/proyectos';
import { Storage, ref, uploadBytes, getDownloadURL, getStorage } from '@angular/fire/storage'
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-proyectosedit',
  templateUrl: './proyectosedit.component.html',
  styleUrls: ['./proyectosedit.component.css']
})
export class ProyectoseditComponent implements OnInit {



@Input() proyecto: Proyecto = {} as Proyecto;
@Output() update = new EventEmitter<string>();

 proyectosList: Proyecto[] = [];
 
    id: any = '';
    editproyectoForm= new FormGroup({
    
    titulo: new FormControl(''),
    descripcion: new FormControl(''),
    imagen: new FormControl(''),
    github: new FormControl(''),
    web: new FormControl(''),
    
    })


  link: string | undefined;
  
  constructor(private storage: Storage, private dataProyectos: ProyectosService) { }

  ngOnInit(): void {
  }
  
  getData() {
  
    this.dataProyectos.getData().subscribe({
      next: data => {
        this.dataProyectos = data;
      },
      error: e => {
        console.log(e);
      } 
    });
  }
  
 

getdataId(id: any) {
  
    this.dataProyectos.getOne(id).subscribe(res => {
    
    console.log(res);
    
    const{ id, titulo, descripcion, imagen, github, web} = res;
    this.id = id;
    
    this.editproyectoForm.patchValue({titulo});
    this.editproyectoForm.patchValue({descripcion});
    this.editproyectoForm.patchValue({imagen});
    this.editproyectoForm.patchValue({github});
    this.editproyectoForm.patchValue({web});
   
  
      })
       
  }
  
  updateProyecto(){
    let obj = this.editproyectoForm.value
    obj.id = this.id
    this.dataProyectos.updateData(obj).subscribe(() => {
      this.getData()
      this.editproyectoForm.reset('')
      this.update.emit(); 
    })
  
  }
  
  
  uploadImage($event: any) {
    const file = $event.target.files[0];
    //console.log(file);
    
    const imgRef = ref(this.storage, `proyectos/${file.name}`);
    
    uploadBytes(imgRef, file)
      .then(response => {
        //console.log(response)

        const storage = getStorage();
        getDownloadURL(ref(storage, `proyectos/${file.name}`))
        getDownloadURL(ref(imgRef))
          .then((url) => {
            this.link = url
            //console.log(url)
          })
          .catch(error => console.log(error))
      })
      .catch(error => console.log(error))
  }

}
