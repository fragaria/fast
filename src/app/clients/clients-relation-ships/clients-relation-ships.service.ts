import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

import { HttpBaseService } from '../../shared';

import { Client } from 'ng2-f-client-models';

@Injectable()
export class ClientsRelationShipsService extends HttpBaseService<Client> {
  protected url = 'api/clientsRelated';  // URL to web API
  protected model = Client;

  constructor (protected http: Http) { super(http); }

  getRelatedClients(clientId: number | string): Promise<Client[]> {
    const url = `${this.url}?relatedWith=${clientId}`;
    return this.getObjects(url)
  }

}
