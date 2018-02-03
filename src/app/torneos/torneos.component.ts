import { Component, OnInit } from '@angular/core';
import {TorneoService} from '../torneo.service';

@Component({
  selector: 'app-torneos',
  templateUrl: './torneos.component.html',
  styleUrls: ['./torneos.component.css']
})
export class TorneosComponent implements OnInit {

  constructor(private _torneoService: TorneoService) { }

  errorMessage: any;
  photos: any;
  
  ngOnInit(): void{
    this._torneoService.getTorneos()
    .subscribe(
      photos =>{this.photos = photos; console.log(photos)} ,
      error => this.errorMessage = <any>error
    );
  }

}
