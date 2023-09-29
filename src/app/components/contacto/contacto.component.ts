import { Component } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { Mensaje } from 'src/app/models/mensaje.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  constructor(private requestService: RequestService,private router: Router) { }

  public mensajeModel = new Mensaje("", "");
  mostrarModalExito = false;

  onSubmit() {
    const formData = new FormData();
    formData.append('correo', this.mensajeModel.correo);
    formData.append('mensaje', this.mensajeModel.mensaje);

    this.requestService.enviarMensaje(formData).subscribe(() => {
      console.log("Mensaje enviado");
    });
    
    this.mostrarModalExito = true;
    setTimeout(() => {
      this.closeModal();
    }, 5000);
  }

  closeModal() {
    this.mostrarModalExito = false;
    this.router.navigate(['/']);
  }

}