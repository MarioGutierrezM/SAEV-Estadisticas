import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class JugadorService {

  url = 'https://saev.herokuapp.com/jugador/';

  constructor(public http: HttpClient) {

  }

  getJugadores() {
    return this.http.get(this.url)
  }

  getSingleJugador(id) {
    return this.http.get(this.url + id);
  }

  createJugador(jugador) {
    return this.http.post(this.url, jugador);
  }

  editJugador(id, jugador) {
    return this.http.patch(this.url + id, jugador);
  }

  deleteJugador(id) {
    return this.http.delete(this.url + id);
  }
}
