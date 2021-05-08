import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioRegistroService {

  private BASE_URL = 'https://cms.qailumno.com/servicios/registro';

  constructor( private http: HttpClient ) { }


  postRegistro( body ) {
    return this.http.post(this.BASE_URL, body);
  }
}
