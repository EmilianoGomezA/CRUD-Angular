import { Component, OnInit } from '@angular/core';
import { Localidad } from 'src/app/models/localidad.model';
import { Candidato } from 'src/app/models/candidato.model';
import { puestos } from 'src/app/constants/puestos.constant';
import { RequestService } from 'src/app/services/request.service';
import { Router } from '@angular/router';
import { FormTools } from 'src/app/services/form-tools.service';

@Component({
  selector: 'app-agregar-candidato',
  templateUrl: './agregar-candidato.component.html',
  styleUrls: ['./agregar-candidato.component.css']
})
export class AgregarCandidatoComponent implements OnInit{

  constructor(private requestService: RequestService, private router: Router, private formTools: FormTools) { }

  candidatoModel = new Candidato("", "", new Date() , "", "", 0, "");
  selectedFile: File | null = null;
  public localidades: Localidad[] = [];
  public puestos = puestos;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
  }

  onSubmit() {
    if(this.selectedFile) {
      const formData = new FormData();
      formData.append('nombre', this.candidatoModel.nombre);
      formData.append('apellidos', this.candidatoModel.apellidos);
      formData.append('fechaNacimiento', this.candidatoModel.fechaNacimiento.toString());
      formData.append('puesto', this.candidatoModel.puesto);
      formData.append('localidad', this.candidatoModel.localidad);
      formData.append('sueldo', this.candidatoModel.sueldo.toString());
      formData.append('imagen', this.selectedFile);

      this.requestService.agregarCandidato(formData).subscribe(() => {
        this.router.navigate(['/planilla']);
      });

    }
  }

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

  numberValidation(event: any) {
    return this.formTools.onlyNumber(event);
  }

}
