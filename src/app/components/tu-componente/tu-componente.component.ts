import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tu-componente',
  template: '<img [src]="imagenUrl" alt="Mi Imagen">',
})
export class TuComponenteComponent {
  imagenUrl: string = 'http://localhost/InventarioAngular/img/img1.jpg'; // Ruta de la imagen en tu servidor PHP

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.cargarImagen();
  }

  cargarImagen() {
    this.http.get(this.imagenUrl, { responseType: 'blob' }).subscribe(
      (imagenBlob: Blob) => {
        const objectURL = URL.createObjectURL(imagenBlob);
        this.imagenUrl = objectURL;
      }
    );
  }
}
