import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticias-ver',
  templateUrl: './noticias-ver.component.html',
  styleUrls: ['./noticias-ver.component.scss']
})
export class NoticiasVerComponent implements OnInit {

  public noticia;

  constructor() { }

  ngOnInit(): void {
    this.noticia = window.history.state.customData;
  }

}
