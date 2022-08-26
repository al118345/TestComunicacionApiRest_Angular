import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { MenuComponent } from './components/menu/menu.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import { SaludarServidorComponent } from './components/saludar-servidor/saludar-servidor.component';
import { DescargarPDFComponent } from './components/descargar-pdf/descargar-pdf.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    SaludarServidorComponent,
    DescargarPDFComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
