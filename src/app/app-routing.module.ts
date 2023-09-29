import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MostrarLocalidadesComponent } from './components/localidad/mostrar-localidades/mostrar-localidades.component';
import { AgregarLocalidadComponent } from './components/localidad/agregar-localidad/agregar-localidad.component';
import { MostrarCandidatosComponent } from './components/planilla/mostrar-candidatos/mostrar-candidatos.component';
import { AgregarCandidatoComponent } from './components/planilla/agregar-candidato/agregar-candidato.component';
import { EditarCandidatoComponent } from './components/planilla/editar-candidato/editar-candidato.component';
import { EditarLocalidadComponent } from './components/localidad/editar-localidad/editar-localidad.component';
import { ContactoComponent } from './components/contacto/contacto.component';

const routes: Routes = [
  {path: '', component: HomeComponent, title: 'Softwena'},
  {path: 'localidades', component: MostrarLocalidadesComponent, title: 'Localidades'},
  {path: 'localidades/agregar', component: AgregarLocalidadComponent, title: 'Agregar localidad'},
  {path: 'localidades/editar/:id', component: EditarLocalidadComponent, title: 'Editar localidad'},
  {path: 'planilla', component: MostrarCandidatosComponent, title: 'Candidatos'},
  {path: 'planilla/agregar', component: AgregarCandidatoComponent, title: 'Agregar candidato'},
  {path: 'planilla/editar/:id', component: EditarCandidatoComponent, title: 'Editar candidato'},
  {path: 'contacto', component: ContactoComponent, title: 'Contáctanos'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
