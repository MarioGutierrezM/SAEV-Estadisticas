import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PartidoService {
  url = 'https://saev.herokuapp.com/partido/';

  constructor(public http: HttpClient) {

  }

  getPartidos() {
    return this.http.get(this.url);
  }

  getSinglePartido(id) {
    return this.http.get(this.url + id);
  }

  createPartido(partido) {
    return this.http.post(this.url, partido);
  }

  editPartido(id, partido) {
    return this.http.patch(this.url + id, partido);
  }

  deletePartido(id) {
    return this.http.delete(this.url + id);
  }
}

