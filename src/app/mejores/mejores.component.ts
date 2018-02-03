import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TorneoService } from '../torneo.service';

@Component({
  selector: 'app-mejores',
  templateUrl: './mejores.component.html',
  styleUrls: ['./mejores.component.css']
})
export class MejoresComponent implements OnInit {

  id: number;
  private sub: any;
  torneo: any;
  mejores: any;

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

  // Pie
  public pieChartLabels: string[] = ['Positivo', 'Neutral', 'Negativo'];
  public pieChartType: string = 'pie';

  public pieChartDataServicio: number[] = [0, 0, 0];
  public pieChartDataRecepcion: number[] = [0, 0, 0];
  public pieChartDataAcomodo: number[] = [0, 0, 0];
  public pieChartDataAtaque: number[] = [0, 0, 0];
  public pieChartDataBloqueo: number[] = [0, 0, 0];
  public pieChartDataDefensa: number[] = [0, 0, 0];

  constructor(private route: ActivatedRoute, public _torneo: TorneoService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
      this._torneo.getMejores(this.id).subscribe(resp => {
        this.torneo = resp["tournament"];
        this.mejores = resp["mejores"];
        console.log(this.torneo);
        console.log(resp["mejores"]);

        this.mejores.servicio.jugador.Plays.forEach(play => {
          if (play.accion === 'servicio') {
            if (play.calificacion === 'positivo') {
              this.servicio.positivo++;
            }
            if (play.calificacion === 'neutral') {
              this.servicio.neutral++;
            }
            if (play.calificacion === 'negativo') {
              this.servicio.negativo++;
            }
          }
        })

        this.mejores.recepcion.jugador.Plays.forEach(play => {
          if (play.accion === 'recepción') {
            if (play.calificacion === 'positivo') {
              this.recepcion.positivo++;
            }
            if (play.calificacion === 'neutral') {
              this.recepcion.neutral++;
            }
            if (play.calificacion === 'negativo') {
              this.recepcion.negativo++;
            }
          }
        })

        this.mejores.acomodo.jugador.Plays.forEach(play => {
          if (play.accion === 'acomodo') {
            if (play.calificacion === 'positivo') {
              this.acomodo.positivo++;
            }
            if (play.calificacion === 'neutral') {
              this.acomodo.neutral++;
            }
            if (play.calificacion === 'negativo') {
              this.acomodo.negativo++;
            }
          }
        })

        this.mejores.ataque.jugador.Plays.forEach(play => {
          if (play.accion === 'ataque') {
            if (play.calificacion === 'positivo') {
              this.ataque.positivo++;
            }
            if (play.calificacion === 'neutral') {
              this.ataque.neutral++;
            }
            if (play.calificacion === 'negativo') {
              this.ataque.negativo++;
            }
          }
        })

        this.mejores.bloqueo.jugador.Plays.forEach(play => {
          if (play.accion === 'bloqueo') {
            if (play.calificacion === 'positivo') {
              this.bloqueo.positivo++;
            }
            if (play.calificacion === 'neutral') {
              this.bloqueo.neutral++;
            }
            if (play.calificacion === 'negativo') {
              this.bloqueo.negativo++;
            }
          }
        })

        this.mejores.defensa.jugador.Plays.forEach(play => {
          if (play.accion === 'defensa') {
            if (play.calificacion === 'positivo') {
              this.defensa.positivo++;
            }
            if (play.calificacion === 'neutral') {
              this.defensa.neutral++;
            }
            if (play.calificacion === 'negativo') {
              this.defensa.negativo++;
            }
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

      }) //resp
    });
  }



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

}
