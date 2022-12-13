import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Storage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage'
import { FormControl, FormGroup } from '@angular/forms';
import { getStorage } from "firebase/storage";
import { Educacion } from 'src/app/Models/educacion';
import { EducacionService } from 'src/app/services/educacion.service';


@Component({
  selector: 'app-educacionedit',
  templateUrl: './educacionedit.component.html',
  styleUrls: ['./educacionedit.component.css']
})
export class EducacioneditComponent implements OnInit {



@Input() educa: Educacion = {} as Educacion;
@Output() update = new EventEmitter<string>();
 
 
 educacionList: Educacion[] = [];
 
    id: any = '';
    editeducaForm= new FormGroup({
    imagen: new FormControl(''),
    titulo: new FormControl(''),
    descripcion: new FormControl(''),
    certificado: new FormControl('')
    
    })


  link: string | undefined;
  certificate: string | undefined;
  
  
  constructor(private storage: Storage, private dataEducacion: EducacionService) { }

 ngOnInit(): void {
  }
  
  getData() {
  
    this.dataEducacion.getData().subscribe({
      next: data => {
        this.dataEducacion = data;
      },
      error: e => {
        console.log(e);
      } 
    });
  }
 
getdataId(id: any) {
  
    this.dataEducacion.getOne(id).subscribe(res => {
    
    console.log(res);
    
    const{ id, imagen, titulo, descripcion, certificado} = res;
    this.id = id;
    this.editeducaForm.patchValue({imagen});
    this.editeducaForm.patchValue({titulo});
    this.editeducaForm.patchValue({descripcion});
    this.editeducaForm.patchValue({certificado});
   
  
      })
       
  }
  
  updateEducacion(){
    let obj = this.editeducaForm.value
    obj.id = this.id
    this.dataEducacion.updateData(obj).subscribe(() => {
      this.getData()
      this.editeducaForm.reset('')
      this.update.emit(); 
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
