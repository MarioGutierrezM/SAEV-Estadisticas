import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class EquipoService {
  url = 'https://saev.herokuapp.com/equipo/';

  constructor(public http: HttpClient) {

  }

  getEquipos() {
    return this.http.get(this.url);
  }

  getSingleEquipo(id) {
    return this.http.get(this.url + id);
  }

  createEquipo(equipo) {
    return this.http.post(this.url, equipo);
  }

  editEquipo(id, equipo) {
    return this.http.patch(this.url + id, equipo);
  }

  deleteEquipo(id) {
    return this.http.delete(this.url + id);
  }
}
