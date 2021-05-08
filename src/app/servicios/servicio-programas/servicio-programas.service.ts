import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioProgramasService {

  private BASE_URL = 'https://cms.qailumno.com/servicios/programas';

  constructor( private http: HttpClient ) { }


  getProgramas() {
    return this.http.get(this.BASE_URL);
  }
}
