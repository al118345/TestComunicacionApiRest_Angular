import { Component, OnInit } from '@angular/core';
import {ConsultarapiService} from "../../service/consultarapi.service";
import { JsonObject } from '@angular-devkit/core';
@Component({
  selector: 'app-saludar-servidor',
  templateUrl: './saludar-servidor.component.html',
  styleUrls: ['./saludar-servidor.component.css']
})
export class SaludarServidorComponent implements OnInit {

  cargando = false;
  resultado = '';
  printado = false;
  object_json: JsonObject = {};
  constructor(private api: ConsultarapiService) { }
  get_saludo() {
    const auxiliar = this.api.saludo();
    this.resultado = '';
    this.printado = false;
    this.cargando  = true;
    this.object_json = {};
    auxiliar.subscribe({
      complete: () => {
        this.cargando = false ;
      },
      error: () => {
        this.printado = true;
        this.cargando = false ;
        this.resultado = 'Error en la comunicación con el servidor';
      },
      next: (resultado) => {
        const aux = resultado as JsonObject;
        this.object_json = aux;
        this.resultado = 'Respuesta recibida correctamente. Esta es la respuesta.'
        this.printado = true;
      }
    });
  }

  ngOnInit(): void {
  }
}
