import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

import { HttpRestJsonService } from '../../core';

import { Client } from 'ng2-f-client-models';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class ClientsRelationShipsService {
  protected url = 'api/clientsRelated';  // URL to web API
  protected model = Client;

  constructor (protected http: HttpRestJsonService<Client>) { }

  getRelatedClients(clientId: number | string): Observable<Client[]> {
    const url = `${this.url}?relatedWith=${clientId}`;
    return this.http.getObjects(url, { model: this.model })
  }

}
