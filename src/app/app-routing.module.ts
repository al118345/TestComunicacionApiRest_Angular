import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DescargarPDFComponent} from "./components/descargar-pdf/descargar-pdf.component";
import {SaludarServidorComponent} from "./components/saludar-servidor/saludar-servidor.component";
import {LoginComponent} from "./components/login/login.component";
import {CargarficheroComponent} from "./components/cargarfichero/cargarfichero.component";


const routes: Routes = [
  { path: 'descarga-pdf', component: DescargarPDFComponent },
  { path: 'saludo-servidor', component: SaludarServidorComponent },
  { path: 'ejemplo-login', component: LoginComponent },
  { path: 'ejemplo-envio-fichero', component: CargarficheroComponent },

  { path: '**',  component: SaludarServidorComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
