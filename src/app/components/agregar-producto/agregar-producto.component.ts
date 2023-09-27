import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';
import { Router } from '@angular/router';
import { FormTools } from 'src/app/services/form-tools.service';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent {

  constructor(private productoService: ProductoService, private router: Router, private formTools: FormTools) { }

  productoModel = new Producto("", "", "", 0, "");
  selectedFile: File | null = null;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
  }

  onSubmit() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('nombre', this.productoModel.nombre);
      formData.append('marca', this.productoModel.marca);
      formData.append('clasificacion', this.productoModel.clasificacion);
      formData.append('cantidad', this.productoModel.cantidad.toString());
      formData.append('imagen', this.selectedFile);

      this.productoService.agregarProducto(formData).subscribe(() => {
        this.router.navigate(['/productos']);
      });
    }
  }

  numberValidation(event: any) {
    return this.formTools.onlyNumber(event);
  }

}