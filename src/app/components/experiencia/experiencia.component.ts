import { Component, OnInit } from '@angular/core'
import { Storage, ref, listAll, getDownloadURL } from '@angular/fire/storage'


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {


  images: string[];
  
  constructor(private storage: Storage) {
    this.images = []; 
   
  }

  ngOnInit(): void {
    this.getImages();
  } 
  
  
   getImages(){
      
     const imagesRef = ref(this.storage, 'experiencia');
     
     listAll(imagesRef)
      .then(async response => {
        //console.log(response);
        
        //this.images = [];
        for(let item of response.items) {
          const url = await getDownloadURL(item);
          this.images.push(url);
          //console.log(url);
        }
      
      })
    .catch(error => console.log(error))
  }

}
