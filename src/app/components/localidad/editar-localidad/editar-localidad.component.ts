import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestService } from 'src/app/services/request.service';
import { Localidad } from 'src/app/models/localidad.model';
import { estados } from 'src/app/constants/estados.constant';

@Component({
  selector: 'app-editar-localidad',
  templateUrl: './editar-localidad.component.html',
  styleUrls: ['./editar-localidad.component.css']
})
export class EditarLocalidadComponent implements OnInit{

  constructor(private route: ActivatedRoute, private router: Router, private requestService: RequestService) { }

  public localidad: Localidad = new Localidad("", "", "");
  public estados = estados;
  selectedFile: File | null = null;
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
  }

  ngOnInit() {
    let idLocalidad = this.route.snapshot.paramMap.get("id");
    this.requestService.obtenerLocalidad(idLocalidad).subscribe((localidad: any) => this.localidad = localidad);
  }

  volver() {
    this.router.navigate(['/localidades']);
  }

  onSubmit() {
    this.requestService.editarLocalidad(this.localidad).subscribe(() => {
      this.volver();
    });
  }


}
