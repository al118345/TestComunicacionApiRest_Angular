import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { MenuComponent } from './components/menu/menu.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SaludarServidorComponent } from './components/saludar-servidor/saludar-servidor.component';
import { DescargarPDFComponent } from './components/descargar-pdf/descargar-pdf.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { CargarficheroComponent } from './components/cargarfichero/cargarfichero.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    SaludarServidorComponent,
    DescargarPDFComponent,
    CargarficheroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
