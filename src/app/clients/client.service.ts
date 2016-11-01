import * as _         from "lodash";
import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

import { HttpBaseService } from '../shared';

import { Client } from 'ng2-f-client-models';

@Injectable()
export class ClientService {
  protected url = 'api/clients';  // URL to web API
  protected model = Client;

  constructor (protected http: HttpBaseService<Client>) { }

  getClients(): Promise<Client[]> {
    return this.http.getObjects(this.url, this.model)
  }

  saveClient(client: Client): Promise<Client> {
    return client.id == null ? this.http.addObject(client, this.url, this.model) : this.http.updateObject(client, this.url, this.model)
  }

}
