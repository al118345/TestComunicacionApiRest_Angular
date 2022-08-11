import { Component, OnInit } from '@angular/core';
import {ConsultarapiserviceService} from "../../service/consultarapiservice.service";

@Component({
  selector: 'app-vista1',
  templateUrl: './vista1.component.html',
  styleUrls: ['./vista1.component.css']
})
export class Vista1Component implements OnInit {
  cargando = false;
  resultado = '';
  printado = false;

  constructor(public api: ConsultarapiserviceService) { }

  ngOnInit(): void {
  }

  saludo() {
    const auxiliar = this.api.saludo()
    auxiliar.subscribe({
      complete: () => {
        this.cargando = false ;
      },
      error: () => {
        this.printado = true;
        this.cargando = false ;
        this.resultado = 'Error en la comunicación con el servidor';
      },
      next: (resultado: Blob) => {
        const dataType = resultado.type;
        const binaryData = [];
        binaryData.push(resultado);
        const downloadLink = document.createElement('a');
        downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, {type: dataType}));
        downloadLink.setAttribute('download', 'resultado_comprimido.pdf');
        document.body.appendChild(downloadLink);
        downloadLink.click();
        this.resultado = 'Respuesta recibida correctamente. Esta es la respuesta.'
        this.printado = true;
      }
    });
  }
}
