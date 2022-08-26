import { Component, OnInit } from '@angular/core';
import {ConsultarapiserviceService} from "../../service/consultarapiservice.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public  token = '';
  model: any = {};
  loading = false;
  error = '';
  username = '';
  password = '';
  show = false;


  constructor(public api: ConsultarapiserviceService) { }
  ngOnInit(): void {
      this.token = '';
  }



  login() {
    const auxiliar = this.api.login(this.username, this.password)
    this.show = false;
    this.loading = true;
    auxiliar.subscribe({
      complete: () => {
        this.loading = false;
      },
      error: () => {
        console.log('error en el servicio, dejamos entrar')
      },
      next: (resultado) => {
        this.token = resultado.token;
        if (this.token !== '' ) {
          this.show = true;
        }
      }
    });

  }

}
