import { Component, OnInit } from '@angular/core';
import { JugadorService } from '../jugador.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {

  id: number;
  private sub: any;
  jugador: any;

  servicio = {
    positivo: 0,
    neutral: 0,
    negativo: 0
  }
  recepcion = {
    positivo: 0,
    neutral: 0,
    negativo: 0
  }
  acomodo = {
    positivo: 0,
    neutral: 0,
    negativo: 0
  }
  ataque = {
    positivo: 0,
    neutral: 0,
    negativo: 0
  }
  bloqueo = {
    positivo: 0,
    neutral: 0,
    negativo: 0
  }
  defensa = {
    positivo: 0,
    neutral: 0,
    negativo: 0
  }

  constructor(private route: ActivatedRoute, private _jugadorService: JugadorService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log('Id del jugador ' + this.id);
      this._jugadorService.getSingleJugador(this.id).subscribe(
        resp => {
          this.jugador = resp;
          console.log(this.jugador);
          
          this.jugador.Plays.forEach(play => {
            switch (play.accion) {
              case 'servicio':
                if (play.calificacion === 'positivo') {
                  this.servicio.positivo++;
                }
                if (play.calificacion === 'neutral') {
                  this.servicio.neutral++;
                }
                if (play.calificacion === 'negativo') {
                  this.servicio.negativo++;
                }
                break;
              case 'recepción':
                if (play.calificacion === 'positivo') {
                  this.recepcion.positivo++;
                }
                if (play.calificacion === 'neutral') {
                  this.recepcion.neutral++;
                }
                if (play.calificacion === 'negativo') {
                  this.recepcion.negativo++;
                }
                break;
              case 'acomodo':
                if (play.calificacion === 'positivo') {
                  this.acomodo.positivo++;
                }
                if (play.calificacion === 'neutral') {
                  this.acomodo.neutral++;
                }
                if (play.calificacion === 'negativo') {
                  this.acomodo.negativo++;
                }
                break;
              case 'ataque':
                if (play.calificacion === 'positivo') {
                  this.ataque.positivo++;
                }
                if (play.calificacion === 'neutral') {
                  this.ataque.neutral++;
                }
                if (play.calificacion === 'negativo') {
                  this.ataque.negativo++;
                }
                break;
              case 'bloqueo':
                if (play.calificacion === 'positivo') {
                  this.bloqueo.positivo++;
                }
                if (play.calificacion === 'neutral') {
                  this.bloqueo.neutral++;
                }
                if (play.calificacion === 'negativo') {
                  this.bloqueo.negativo++;
                }
                break;
              case 'defensa':
                if (play.calificacion === 'positivo') {
                  this.defensa.positivo++;
                }
                if (play.calificacion === 'neutral') {
                  this.defensa.neutral++;
                }
                if (play.calificacion === 'negativo') {
                  this.defensa.negativo++;
                }
                break;
            }
          })
          console.log(this.servicio);
          console.log(this.recepcion);
          console.log(this.acomodo);
          console.log(this.ataque);
          console.log(this.bloqueo);
          console.log(this.defensa);

          this.pieChartDataServicio = [this.servicio.positivo, this.servicio.neutral, this.servicio.negativo];
          this.pieChartDataRecepcion = [this.recepcion.positivo, this.recepcion.neutral, this.recepcion.negativo];
          this.pieChartDataAcomodo = [this.acomodo.positivo, this.acomodo.neutral, this.acomodo.negativo];
          this.pieChartDataAtaque = [this.ataque.positivo, this.ataque.neutral, this.ataque.negativo];
          this.pieChartDataBloqueo = [this.bloqueo.positivo, this.bloqueo.neutral, this.bloqueo.negativo];
          this.pieChartDataDefensa = [this.defensa.positivo, this.defensa.neutral, this.defensa.negativo];
        }
      )
    });
  }


  // Pie
  public pieChartLabels: string[] = ['Positivo', 'Neutral', 'Negativo'];
  public pieChartType: string = 'pie';
  public pieChartDataServicio: number[] = [0, 0, 0];
  public pieChartDataRecepcion: number[] = [0, 0, 0];
  public pieChartDataAcomodo: number[] = [0, 0, 0];
  public pieChartDataAtaque: number[] = [0, 0, 0];
  public pieChartDataBloqueo: number[] = [0, 0, 0];
  public pieChartDataDefensa: number[] = [0, 0, 0];

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public lineChartColors: Array<any> = [

    { // first color
      backgroundColor: ['#2EFE64', '#5858FA', '#FE2E2E'],
      borderColor: '#ffffff',
      pointBackgroundColor: 'rgba(225,10,24,0.2)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(225,10,24,0.2)'
    }
  ];

  errorMessage: any;
  photos: any;



}


