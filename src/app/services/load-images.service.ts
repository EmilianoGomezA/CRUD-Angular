import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { ProductoService } from './producto.service';

@Injectable({
  providedIn: 'root'
})
export class LoadImagesService {
  serverImageUrl: string = '';
  finalImageUrl = `${environment.baseUrl}/${this.serverImageUrl}`;

  constructor(private http: HttpClient, private productoService: ProductoService) { }

  tomarUrl() {
    return this.productoService.obtenerProductos().subscribe((data: any) => this.serverImageUrl = data.imagen);
  }

  cargarImagen() {
    this.http.get(this.finalImageUrl, { responseType: 'blob' }).subscribe(
      (imagenBlob: Blob) => {
        const objectURL = URL.createObjectURL(imagenBlob);
        this.finalImageUrl = objectURL;
      }
    );
  }
}
