import * as _         from "lodash";
import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

import { HttpBaseService } from '../shared';

import { Client } from 'ng2-f-client-models';

@Injectable()
export class ClientService extends HttpBaseService<Client> {
  protected url = 'api/clients';  // URL to web API

  constructor (protected http: Http) { super(http); }

  getClients(): Promise<Client[]> {
    return this.getObjects()
  }

  saveClient(client: Client): Promise<Client> {
    return client.id == null ? this.addObject(client) : this.updateObject(client)
  }

}
