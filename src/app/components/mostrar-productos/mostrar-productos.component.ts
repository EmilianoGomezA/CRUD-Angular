import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/app/models/producto.model';
import { Imagen } from 'src/app/models/imagenes.model';

@Component({
  selector: 'app-mostrar-productos',
  templateUrl: './mostrar-productos.component.html',
  styleUrls: ['./mostrar-productos.component.css']
})
export class MostrarProductosComponent implements OnInit{
  public productos: Producto[] = [];
  public imageUrl: string[] = [];
  public serverPath: string = 'http://localhost/InventarioAngular/'

  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.traerProductos();
  }

  traerProductos() {
    this.productoService
      .obtenerProductos()
      .subscribe((productos: any) => {
        this.productos = productos;
        console.log(this.productos);

        this.productos.forEach(producto => {
          this.imageUrl.push(`${this.serverPath}/${producto.imagen}`);
          console.log(this.imageUrl);
        });
      });
  }

}
