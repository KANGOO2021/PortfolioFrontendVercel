import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/Models/educacion';
import { EducacionService } from 'src/app/services/educacion.service';
import { Storage, ref, listAll, getDownloadURL } from '@angular/fire/storage'
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  
 
  
  educacionList: Educacion[] | any;
  
  
  certificadosList: string[];
  imagenesList: string[]; 
  
  constructor(private dataEducacion: EducacionService, private storage: Storage, public login:LoginService) { 
  
    this.certificadosList = [];
    this.imagenesList = []; 
   
  }

  ngOnInit(): void {
  this.getData();
  
   this.getImagenes();
   this.getCertificados()
  }
  
  getData() {
  
    this.dataEducacion.getData().subscribe({
      next: data => {
        this.educacionList = data;
      },
      error: e => {
        console.log(e);
      }
       
    });
  }
  
  
  eliminar(id: string) {
    if (confirm('¿Seguro que desea eliminar?')) {
      this.dataEducacion.deleteData(id).subscribe({
        next: () => {
        this.getData();
          
        },
        error: e => {
          console.log(e);
          
        }
      })
    }
  }
  
  getImagenes() {
      
    const imagesRef = ref(this.storage, 'educacion/imagenes');
     
    listAll(imagesRef)
      .then(async response => {
        //console.log(response);
        
        //this.images = [];
        for (let item of response.items) {
          const url = await getDownloadURL(item);
          this.imagenesList.push(url);
          //console.log(url);
        }
      
      })
      .catch(error => console.log(error))

  }
  
  getCertificados() {
      
    const imagesRef = ref(this.storage, 'educacion/certificados');
     
    listAll(imagesRef)
      .then(async response => {
        //console.log(response);
        
        //this.images = [];
        for (let item of response.items) {
          const url = await getDownloadURL(item);
          this.certificadosList.push(url);
        //console.log(url);
        }
      
      })
      .catch(error => console.log(error))

  }

}
