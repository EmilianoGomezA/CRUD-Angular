import { Component, OnInit } from '@angular/core';
import { Candidato } from 'src/app/models/candidato.model';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-mostrar-candidatos',
  templateUrl: './mostrar-candidatos.component.html',
  styleUrls: ['./mostrar-candidatos.component.css']
})
export class MostrarCandidatosComponent implements OnInit{
  public candidatos: Candidato[] = [];
  public serverPath: string = 'http://localhost/InventarioAngular/';
  idCandidatoAEliminar: number | null = null;
  nombreCandidatoAEliminar: string | null = null;
  mostrarModalEliminar = false;

  constructor(private requestService: RequestService) { }

  ngOnInit() {
    this.traerCandidatos();
  }

  traerCandidatos() {
    this.requestService.obtenerCandidatos()
      .subscribe((candidatos: any) => {
        this.candidatos = candidatos;
      });
  }

  mostrarModalConfirmacion(candidatoId: any) {
    this.idCandidatoAEliminar = candidatoId;
    
    const candidato = this.candidatos.find((candidato) => candidato.idCandidato === candidatoId);
    if (candidato) {
        this.nombreCandidatoAEliminar = candidato.nombre;
    } else {
        this.nombreCandidatoAEliminar = null;
    }
    
    this.mostrarModalEliminar = true;
  }

  ocultarModalConfirmacion() {
      this.mostrarModalEliminar = false;
  }

  eliminarCandidato() {
      if (this.idCandidatoAEliminar !== null) {
          this.requestService.eliminarCandidato(this.idCandidatoAEliminar)
            .subscribe(() => {
              this.traerCandidatos();
            })
          console.log(`Eliminar candidato con ID: ${this.idCandidatoAEliminar}`);
      }
      this.ocultarModalConfirmacion();
  }

}
