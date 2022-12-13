export class Perfil {

    id?: string;
    nombre: String;
    email: String;
    puesto: String;
    ubicacion: String;
    imagen: String;
    bgimg1: String;
    bgimg2: String;
    bgimg3: String;
    
  constructor(nombre: String, email: String, puesto: String, ubicacion: String, imagen: String, 
              bgimg1: String, bgimg2: String, bgimg3: String) {
      
        this.nombre= nombre;
        this.email= email;
        this.puesto = puesto;
        this.ubicacion= ubicacion;
        this.imagen = imagen;
        this.bgimg1= bgimg1;
        this.bgimg2= bgimg2;
        this.bgimg3= bgimg3;
   
    }
}