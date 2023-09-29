import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { Localidad } from 'src/app/models/localidad.model';

@Component({
  selector: 'app-mostrar-localidades',
  templateUrl: './mostrar-localidades.component.html',
  styleUrls: ['./mostrar-localidades.component.css']
})
export class MostrarLocalidadesComponent implements OnInit{
  public localidades: Localidad[] = [];
  public serverPath: string = 'http://localhost/InventarioAngular/';
  idLocalidadAEliminar: number | null = null;
  nombreLocalidadAEliminar: string | null = null;
  mostrarModalEliminar = false;

  constructor(private requestService: RequestService) { }

  ngOnInit() {
    this.traerLocalidades();
  }

  traerLocalidades() {
    this.requestService
      .obtenerLocalidades()
      .subscribe((localidades: any) => {
        this.localidades = localidades;
      });
  }

  mostrarModalConfirmacion(localidadId: any) {
    this.idLocalidadAEliminar = localidadId;
    
    const localidad = this.localidades.find((localidad) => localidad.idLocalidad === localidadId);
    if (localidad) {
        this.nombreLocalidadAEliminar = localidad.nombre;
    } else {
        this.nombreLocalidadAEliminar = null;
    }
    
    this.mostrarModalEliminar = true;
  }

  ocultarModalConfirmacion() {
      this.mostrarModalEliminar = false;
  }

  eliminarLocalidad() {
      if (this.idLocalidadAEliminar !== null) {
          this.requestService.eliminarLocalidad(this.idLocalidadAEliminar)
            .subscribe(() => {
              this.traerLocalidades();
            })
          console.log(`Eliminar localidad con ID: ${this.idLocalidadAEliminar}`);
      }
      this.ocultarModalConfirmacion();
  }

}
