import { Component, OnInit } from '@angular/core';
import {JugadorService} from '../jugador.service'; 

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {

  constructor(private _jugadorService: JugadorService) { }

  errorMessage: any;
  photos: any;

  ngOnInit() {
    this._jugadorService.getJugadores()
    .subscribe(
      photos =>{this.photos = photos; console.log(photos)} ,
      error => this.errorMessage = <any>error
    );
  }

}
