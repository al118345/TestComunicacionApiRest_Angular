import { Injectable } from '@angular/core';
import { Observable, throwError} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from "rxjs/operators";
import {User} from "../modelos/User";

@Injectable({
  providedIn: 'root'
})
export class ConsultarapiserviceService {

  constructor(private http: HttpClient) { }

  saludo(): Observable<any>  {
    return this.http.get<any>( `http://0.0.0.0:5000/api/v1/saludo/inicial/`
      )
      .pipe(
        catchError((err) => {
          console.log('error caught in service')
          console.error(err);
          return throwError(err);
        })
      );
  }

  descargar_fichero()  {
    const  httpOptions = new HttpHeaders({
      'Content-Type': 'application/pdf',
      Accept : 'application/pdf'});

    return this.http.get<Blob>( `http://0.0.0.0:5000/api/v1/descargar_fichero_test/`,
      {headers: httpOptions, responseType: 'blob' as 'json' }   )
      ;

  }




  login(username: string, password: string): Observable<User>  {
      const data = {
        'user': username,
        'password': password
      };
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
        })
      };

      return this.http.post<User>( `http://0.0.0.0:5000/api/v1/get_token`
        , data, httpOptions)
        .pipe(
          catchError((err) => {
            console.log('error caught in service')
            console.error(err);
            return throwError(err);
          })
        );
    }
}
