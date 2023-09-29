import { Component } from '@angular/core';
import { Localidad } from 'src/app/models/localidad.model';
import { RequestService } from 'src/app/services/request.service';
import { Router } from '@angular/router';
import { estados } from 'src/app/constants/estados.constant';

@Component({
  selector: 'app-agregar-localidad',
  templateUrl: './agregar-localidad.component.html',
  styleUrls: ['./agregar-localidad.component.css']
})
export class AgregarLocalidadComponent {

  constructor(private requestService: RequestService, private router: Router) { }

  localidadModel = new Localidad("", "", "");
  selectedFile: File | null = null;
  public estados = estados;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
  }

  onSubmit() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('nombre', this.localidadModel.nombre);
      formData.append('estado', this.localidadModel.estado);
      formData.append('escudo', this.selectedFile);

      this.requestService.agregarLocalidad(formData).subscribe(() => {
        this.router.navigate(['/localidades']);
      });
    }
  }
}
