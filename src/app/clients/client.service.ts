import * as _         from "lodash";
import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

import { HttpRestJsonService } from '../core';

import { Client } from 'ng2-f-client-models';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class ClientService {
  protected url = 'api/clients';  // URL to web API
  protected model = Client;

  constructor (protected http: HttpRestJsonService<Client>) { }

  getClients(): Observable<Client[]> {
    return this.http.getObjects(this.url, this.model)
  }

  saveClient(client: Client): Observable<Client> {
    return client.id == null ? this.http.addObject(this.url, client, { model: this.model }) : this.http.updateObject(this.url, client, { model: this.model })
  }

}
