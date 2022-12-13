import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/Models/educacion';
import { EducacionService } from 'src/app/services/educacion.service';
import { Storage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage'
import { getStorage } from "firebase/storage";



@Component({
  selector: 'app-educacion-add',
  templateUrl: './educacion-add.component.html',
  styleUrls: ['./educacion-add.component.css']
})
export class EducacionAddComponent implements OnInit {


  @Output() add = new EventEmitter<any>();


  addeducaForm: FormGroup;
  
  link: string | undefined;
  certificate: string | undefined;
 
  
  constructor(private fb: FormBuilder,
    private router: Router,
    private dataEducacion: EducacionService,
    private storage: Storage) {
              
    this.addeducaForm = this.fb.group({
      imagen: ['', Validators.required],
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      certificado: ['', Validators.required]  
    })          
  }

  ngOnInit(): void {}
  
  
  getEduca() {

    const data: Educacion = {
 
      imagen: this.addeducaForm.get('imagen')?.value,
      titulo: this.addeducaForm.get('titulo')?.value,
      descripcion: this.addeducaForm.get('descripcion')?.value,
      certificado: this.addeducaForm.get('certificado')?.value
      
    }
    
    this.dataEducacion.addData(data).subscribe({
      next: () => {
        this.dataEducacion.getData();
        this.addeducaForm.reset()
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
    
    const imgRef = ref(this.storage, `educacion/imagenes/${file.name}`);
    
    uploadBytes(imgRef, file)
      .then(response => {
        //console.log(response)

        const storage = getStorage();
        getDownloadURL(ref(storage, `educacion/imagenes/${file.name}`))
        getDownloadURL(ref(imgRef))
          .then((url) => {
            this.link = url
            //console.log(url)
          })
          .catch(error => console.log(error))
      })
      .catch(error => console.log(error))
  }
  
  
  
  uploadCertificate($event: any) {
    const file = $event.target.files[0];
    //console.log(file);
    
    const imgRef = ref(this.storage, `educacion/certificados/${file.name}`);
    
    uploadBytes(imgRef, file)
      .then(response => {
        //console.log(response)

        const storage = getStorage();
        getDownloadURL(ref(storage, `educacion/certificados/${file.name}`))
        getDownloadURL(ref(imgRef))
          .then((url) => {
            this.certificate = url
            //console.log(url)
          })
          .catch(error => console.log(error))
      })
      .catch(error => console.log(error))
  }


}
