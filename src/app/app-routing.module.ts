import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MostrarProductosComponent } from './components/mostrar-productos/mostrar-productos.component';
import { AgregarProductoComponent } from './components/agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from './components/editar-producto/editar-producto.component';
import { EliminarProductoComponent } from './components/eliminar-producto/eliminar-producto.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'productos', component: MostrarProductosComponent},
  {path: 'productos/agregar', component: AgregarProductoComponent, title: 'Agregar producto'},
  {path: 'productos/editar/:id', component: EditarProductoComponent, title: 'Editar producto'},
  {path: 'productos/eliminar/:id', component: EliminarProductoComponent, title: 'Eliminar producto'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
