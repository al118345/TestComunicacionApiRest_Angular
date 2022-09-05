import { Component, OnInit } from '@angular/core';
import {ConsultarapiService} from "../../service/consultarapi.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public  token = '';
  loading = false;
  error = false;
  username = '';
  password = '';
  show = false;


  constructor(public api: ConsultarapiService) { }
  ngOnInit(): void {
      this.token = '';
  }



  login() {
    const auxiliar = this.api.login(this.username, this.password)
    this.show = false;
    this.loading = true;
    this.error = false;
    auxiliar.subscribe({
      complete: () => {
        this.loading = false;
      },
      error: () => {
        this.error = true;
        console.log('error en el servicio, dejamos entrar')
      },
      next: (resultado) => {
        this.token = resultado.token;
        if (this.token  !== null ) {
          this.show = true;
        }
        else{
          this.error = true;
        }
      }
    });

  }

}
