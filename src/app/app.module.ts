import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
      {path: 'jugador/:id', component: ReporteComponent},
      {path: 'torneo/:id', component: MejoresComponent},
      {path: 'torneos', component: TorneosComponent},
      {path: 'jugadores', component: JugadoresComponent}
];


import { AppComponent } from './app.component';
import { ReporteComponent } from './reporte/reporte.component';
import { MejoresComponent } from './mejores/mejores.component';

import {TorneoService} from './torneo.service';
import {PartidoService} from './partido.service';
import {EquipoService} from './equipo.service';
import {JugadorService} from './jugador.service';
import { HttpClientModule } from '@angular/common/http';
import { JugadoresComponent } from './jugadores/jugadores.component';
import { TorneosComponent } from './torneos/torneos.component';


@NgModule({
  declarations: [
    AppComponent,
    ReporteComponent,
    MejoresComponent,
    JugadoresComponent,
    TorneosComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    RouterModule.forRoot(
      appRoutes
    ),
    HttpClientModule
  ],
  providers: [
    TorneoService,
    EquipoService,
    JugadorService,
    PartidoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
