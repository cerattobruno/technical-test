import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/compratido/header/header/header.component';
import { MenuComponent } from './componentes/compratido/menu/menu/menu.component';
import { FooterComponent } from './componentes/compratido/footer/footer/footer.component';
import { HomeComponent } from './componentes/paginas/home/home/home.component';
import { RegistroComponent } from './componentes/paginas/registro/registro/registro.component';
import { NoticiasVerComponent } from './componentes/paginas/noticias/noticias-ver/noticias-ver.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    RegistroComponent,
    NoticiasVerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
