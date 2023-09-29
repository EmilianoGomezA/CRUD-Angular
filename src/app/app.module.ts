import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AgregarLocalidadComponent } from './components/localidad/agregar-localidad/agregar-localidad.component';
import { MostrarLocalidadesComponent } from './components/localidad/mostrar-localidades/mostrar-localidades.component';
import { AgregarCandidatoComponent } from './components/planilla/agregar-candidato/agregar-candidato.component';
import { MostrarCandidatosComponent } from './components/planilla/mostrar-candidatos/mostrar-candidatos.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { EditarCandidatoComponent } from './components/planilla/editar-candidato/editar-candidato.component';
import { EditarLocalidadComponent } from './components/localidad/editar-localidad/editar-localidad.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AgregarLocalidadComponent,
    MostrarLocalidadesComponent,
    AgregarCandidatoComponent,
    MostrarCandidatosComponent,
    HeaderComponent,
    ContactoComponent,
    EditarCandidatoComponent,
    EditarLocalidadComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
