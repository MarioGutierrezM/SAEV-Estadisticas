import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class TorneoService {

  url = 'https://saev.herokuapp.com/torneo/';

  constructor(public http: HttpClient) {

  }

  getTorneos() {
    return this.http.get(this.url);
  }

  getSingleTorneo(id) {
    return this.http.get(this.url + id);
  }

  createTorneo(torneo) {
    return this.http.post(this.url, torneo);
  }

  editTorneo(id, torneo) {
    return this.http.patch(this.url + id, torneo);
  }

  deleteTorneo(id) {
    return this.http.delete(this.url + id);
  }

  addTeamToTorneo(teams) {
    return this.http.post(this.url + 'equipo', teams);
  }

  getMejores(id){
    return this.http.get(this.url+ 'mejores/'+id);
  }
}
