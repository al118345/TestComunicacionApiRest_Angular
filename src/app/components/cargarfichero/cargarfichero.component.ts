import { Component, OnInit } from '@angular/core';
import {ConsultarapiService} from "../../service/consultarapi.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-cargarfichero',
  templateUrl: './cargarfichero.component.html',
  styleUrls: ['./cargarfichero.component.css']
})
export class CargarficheroComponent implements OnInit {

  myForm = new FormGroup({
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])

  });
  get f() {
    return this.myForm.controls;
  }

  desactivar = false;
  error = false;
  texto_errocr = '';
  robot = false;
  correcto = false;
  texto_correcto = '';

  constructor(public api: ConsultarapiService) { }

  ngOnInit(): void {
    this.desactivar = false;
    this.error = false;
    this.texto_errocr = '';
    this.robot = false;
    this.correcto = false;
    this.texto_correcto = '';
  }



  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.myForm.patchValue({
        fileSource: file
      });
    }
  }

  enviar_fichero (){
    const formData = new FormData();
    formData.append('file', this.myForm.get('fileSource')?.value);


    const auxiliar = this.api.enviar_documento(formData)
    auxiliar.subscribe({
      complete: () => {
      },
      error: () => {
        this.error = true;
        this.texto_errocr = 'Error en el servicio, no se ha podido enviar el fichero';
        console.log('error en el servicio')
      },
      next: (response) => {
        this.correcto = true;
        this.texto_correcto = 'Fichero enviado correctamente';
        const dataType = response.type;
        const binaryData = [];
        binaryData.push(response);
        const downloadLink = document.createElement('a');
        downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, {type: dataType}));
        downloadLink.setAttribute('download', 'resultado_comprimido.pdf');
        document.body.appendChild(downloadLink);
        downloadLink.click();
      }
    });
  }
}
