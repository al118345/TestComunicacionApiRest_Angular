import { Component, OnInit } from '@angular/core';
import {ConsultarapiserviceService} from "../../service/consultarapiservice.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public  token = '';

  constructor(public api: ConsultarapiserviceService) { }
  ngOnInit(): void {
      this.token = '';
  }

  login(usuario: string, contrasena: string) {
    const auxiliar = this.api.login(usuario, contrasena)
    auxiliar.subscribe({
      complete: () => {
      },
      error: () => {
        console.log('error en el servicio, dejamos entrar')
      },
      next: (resultado) => {
        this.token = resultado.token;
      }
    });
  }

}
