import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ServicioNoticiasService} from '../../../../servicios/servicio-noticias/servicio-noticias.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public noticias;
  public cargando = true;

  constructor( private sevicioNoticias: ServicioNoticiasService,
               private router: Router
              ) { }

  ngOnInit(): void {
    this.obtenerNoticias();
  }

  obtenerNoticias() {
    this.sevicioNoticias.getNoticias()
      .subscribe((data) =>{ 
        this.noticias = data
        this.cargando = false;
      });
  }

  navegarNoticia( noticia ){

    const navigationExtras: NavigationExtras = {
      state: {
        customData: noticia
      }
    };

    this.router.navigate(
      ['/noticias', noticia['id']],
      navigationExtras
    );
  }

}
