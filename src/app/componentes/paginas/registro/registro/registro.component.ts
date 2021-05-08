import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioProgramasService } from 'src/app/servicios/servicio-programas/servicio-programas.service';
import { ServicioRegistroService } from 'src/app/servicios/servicio-registro/servicio-registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  public name = '';
  public family_name = '';
  public email = '';
  public phone = null;
  public comment = '';
  public program = null;
  public program_list = [];

  public cargando = false;

  constructor( private sevicioProgramas: ServicioProgramasService,
               private sevicioRegistro: ServicioRegistroService,
               private router: Router,
              ) { }

  ngOnInit(): void {
    this.obtenerProgramas();
  }

  obtenerProgramas() {
    this.sevicioProgramas.getProgramas().subscribe((data) =>{
      let datos;
      datos = data;
      this.program_list =  datos.filter((valorActual, indiceActual, arreglo) => {
        return arreglo.findIndex(valorDelArreglo => JSON.stringify(valorDelArreglo) === JSON.stringify(valorActual)) === indiceActual
      })
    });
  }

  onSubmit(form){
    this.cargando = true;
    let registro_completo = {
      name: this.name,
      family_name: this.family_name,
      email: this.email,
      phone: this.phone,
      comment: this.comment,
      program: this.program
    }

    this.sevicioRegistro.postRegistro(registro_completo).subscribe((data) =>{
      this.cargando = false;
      alert("Registro completado exitosamente!")
      this.router.navigateByUrl('/home');
    });
  }

}
