import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Storage, ref, uploadBytes, getDownloadURL, getStorage } from '@angular/fire/storage'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/Models/proyectos';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-proyectosadd',
  templateUrl: './proyectosadd.component.html',
  styleUrls: ['./proyectosadd.component.css']
})
export class ProyectosaddComponent implements OnInit {

 @Output() add = new EventEmitter<any>();

  proyectoForm: FormGroup;
  
  link: string | undefined;

  
  constructor(private fb: FormBuilder,
    private router: Router,
    private dataProyectos: ProyectosService,
    private storage: Storage) {
    
     this.proyectoForm = this.fb.group({
     
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      imagen: ['', Validators.required],
      github: ['', Validators.required],  
      web: ['', Validators.required],
    })
    
    
    }

  ngOnInit(): void {
  }
  
  
    getProyecto() {

    const data: Proyecto = {
 
      
      titulo: this.proyectoForm.get('titulo')?.value,
      descripcion: this.proyectoForm.get('descripcion')?.value,
      imagen: this.proyectoForm.get('imagen')?.value,
      github: this.proyectoForm.get('github')?.value,
      web: this.proyectoForm.get('web')?.value,
      
 
      
    }
    
    this.dataProyectos.addData(data).subscribe({
      next: () => {
        this.dataProyectos.getData();
        this.proyectoForm.reset()
        this.add.emit();
          
      },
      error: e => {
        console.log(e);
          
      }
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
