import { Component, OnInit } from '@angular/core';
import {JsonObject} from "@angular/compiler-cli/ngcc/src/packages/entry_point";
import {ConsultarapiService} from "../../service/consultarapi.service";

@Component({
  selector: 'app-obtener-json',
  templateUrl: './obtener-json.component.html',
  styleUrls: ['./obtener-json.component.css']
})
export class ObtenerJsonComponent implements OnInit {

  cargando = false;
  resultado = '';
  printado = false;
  object_json: JsonObject = {};
  constructor(private api: ConsultarapiService) { }

  obtener_json() {
    const auxiliar = this.api.ejemploPeticionPost();
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
