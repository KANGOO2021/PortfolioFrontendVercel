export class Educacion {

    id?: string;
    titulo: String;
    descripcion: String;
    imagen: String;
    certificado?: String;
    
  constructor(titulo: String, descripcion: String, imagen: String, certificado: String) {
      
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.certificado = certificado;
    }
}