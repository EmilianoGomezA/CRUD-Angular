import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestService } from 'src/app/services/request.service';
import { Candidato } from 'src/app/models/candidato.model';
import { Localidad } from 'src/app/models/localidad.model';
import { puestos } from 'src/app/constants/puestos.constant';
import { FormTools } from 'src/app/services/form-tools.service';

@Component({
  selector: 'app-editar-candidato',
  templateUrl: './editar-candidato.component.html',
  styleUrls: ['./editar-candidato.component.css']
})
export class EditarCandidatoComponent implements OnInit{

  constructor(private route: ActivatedRoute, private router: Router, private requestService: RequestService, private formTools: FormTools) { }

  candidato = new Candidato("", "", new Date() , "", "", 0, "");
  public localidades: Localidad[] = [];
  public puestos = puestos;
  selectedFile: File | null = null;
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
  }

  ngOnInit() {
    this.traerLocalidades();
    let idCandidato = this.route.snapshot.paramMap.get("id");
    this.requestService.obtenerCandidato(idCandidato).subscribe((candidato: any) => {
      this.candidato = candidato;
      console.log(this.candidato);
    });
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

  volver() {
    this.router.navigate(['/planilla']);
  }

  onSubmit() {
    this.requestService.editarCandidato(this.candidato).subscribe(() => {
      this.volver();
    });
  }
  
}
