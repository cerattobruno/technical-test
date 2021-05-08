import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicioNoticiasService {

  private BASE_URL = 'https://cms.qailumno.com/servicios/noticias';

  constructor( private http: HttpClient ) { }


  getNoticias() {
    return this.http.get(this.BASE_URL);
  }
}
