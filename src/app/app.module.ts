import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AgregarProductoComponent } from './components/agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from './components/editar-producto/editar-producto.component';
import { EliminarProductoComponent } from './components/eliminar-producto/eliminar-producto.component';
import { MostrarProductosComponent } from './components/mostrar-productos/mostrar-productos.component';
import { TuComponenteComponent } from './components/tu-componente/tu-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AgregarProductoComponent,
    EditarProductoComponent,
    EliminarProductoComponent,
    MostrarProductosComponent,
    TuComponenteComponent
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
