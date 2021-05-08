import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/paginas/home/home/home.component';
import { NoticiasVerComponent } from './componentes/paginas/noticias/noticias-ver/noticias-ver.component';
import { RegistroComponent } from './componentes/paginas/registro/registro/registro.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'noticias/:slug', component: NoticiasVerComponent},
  {path: 'registro', component: RegistroComponent},
  {path: '',  redirectTo: 'home', pathMatch: 'full'},
  {path: '**',  redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
