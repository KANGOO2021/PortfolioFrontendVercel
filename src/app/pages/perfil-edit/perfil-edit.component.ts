import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Perfil } from 'src/app/Models/perfil';
import { Storage, ref, uploadBytes, getDownloadURL, getStorage } from '@angular/fire/storage'
import { PerfilService } from 'src/app/services/perfil.service';

@Component({
  selector: 'app-perfil-edit',
  templateUrl: './perfil-edit.component.html',
  styleUrls: ['./perfil-edit.component.css']
})
export class PerfilEditComponent implements OnInit {


@Input() perfil: Perfil = {} as Perfil;
@Output() update = new EventEmitter<string>();

 perfilList: Perfil[] = [];
 
    id: any = '';
    editperfilForm= new FormGroup({
    
    nombre: new FormControl(''),
    email: new FormControl(''),
    puesto: new FormControl(''),
    ubicacion: new FormControl(''),
    imagen: new FormControl(''),
    bgimg1: new FormControl(''),
    bgimg2: new FormControl(''),
    bgimg3: new FormControl('')
    
    })
  
  link: string | undefined;
  bgimg1: string | undefined;
  bgimg2: string | undefined;
  bgimg3: string | undefined;
  
  
  constructor(private storage: Storage, private dataPerfil: PerfilService) { }

  ngOnInit(): void {
  }
  
   getData() {
  
    this.dataPerfil.getData().subscribe({
      next: data => {
        this.dataPerfil = data;
      },
      error: e => {
        console.log(e);
      } 
    });
  }
  
 

getdataId(id: any) {
  
    this.dataPerfil.getOne(id).subscribe(res => {
    
    
    const{ id, nombre, email, puesto, ubicacion, imagen, bgimg1, bgimg2, bgimg3,} = res;
    this.id = id;
    
    this. editperfilForm.patchValue({nombre});
    this. editperfilForm.patchValue({email});
    this. editperfilForm.patchValue({puesto});
    this. editperfilForm.patchValue({ubicacion});
    this. editperfilForm.patchValue({imagen});
    this. editperfilForm.patchValue({bgimg1});
    this. editperfilForm.patchValue({bgimg2});
    this. editperfilForm.patchValue({bgimg3});
   
    })
       
  }
  
  updatePerfil(){
    let obj = this. editperfilForm.value
    obj.id = this.id
    this.dataPerfil.updateData(obj).subscribe(() => {
      this.getData()
      this.editperfilForm.reset('')
      this.update.emit(); 
    })
  
  }
  
  
  uploadImage($event: any) {
    const file = $event.target.files[0];
    //console.log(file);
    
    const imgRef = ref(this.storage, `perfil/${file.name}`);
    
    uploadBytes(imgRef, file)
      .then(response => {
        //console.log(response)

        const storage = getStorage();
        getDownloadURL(ref(storage, `perfil/${file.name}`))
        getDownloadURL(ref(imgRef))
          .then((url) => {
            this.link = url
            //console.log(url)
          })
          .catch(error => console.log(error))
      })
      .catch(error => console.log(error))
  }
  
  uploadBgimg1($event: any) {
    const file = $event.target.files[0];
    //console.log(file);
    
    const imgRef = ref(this.storage, `perfil/background/${file.name}`);
    
    uploadBytes(imgRef, file)
      .then(response => {
        //console.log(response)

        const storage = getStorage();
        getDownloadURL(ref(storage, `perfil/background/${file.name}`))
        getDownloadURL(ref(imgRef))
          .then((url) => {
            this.bgimg1 = url
            //console.log(url)
          })
          .catch(error => console.log(error))
      })
      .catch(error => console.log(error))
  }
  
  uploadBgimg2($event: any) {
    const file = $event.target.files[0];
    //console.log(file);
    
    const imgRef = ref(this.storage, `perfil/background/${file.name}`);
    
    uploadBytes(imgRef, file)
      .then(response => {
        //console.log(response)

        const storage = getStorage();
        getDownloadURL(ref(storage, `perfil/background/${file.name}`))
        getDownloadURL(ref(imgRef))
          .then((url) => {
            this.bgimg2 = url
            //console.log(url)
          })
          .catch(error => console.log(error))
      })
      .catch(error => console.log(error))
  }
  
  uploadBgimg3($event: any) {
    const file = $event.target.files[0];
    //console.log(file);
    
    const imgRef = ref(this.storage, `perfil/background/${file.name}`);
    
    uploadBytes(imgRef, file)
      .then(response => {
        //console.log(response)

        const storage = getStorage();
        getDownloadURL(ref(storage, `perfil/background/${file.name}`))
        getDownloadURL(ref(imgRef))
          .then((url) => {
            this.bgimg3 = url
            //console.log(url)
          })
          .catch(error => console.log(error))
      })
      .catch(error => console.log(error))
  }

}
