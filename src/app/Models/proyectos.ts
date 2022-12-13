export class Proyecto {

    id?: string;
    titulo: String;
    descripcion: String;
    imagen: String;
    github: String;
    web: String;
    
  constructor(titulo: String, descripcion: String, imagen: String, github: String, web: String) {
      
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.github= github;
        this.web = web;
    }
}