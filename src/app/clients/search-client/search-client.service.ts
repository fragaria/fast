import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions, URLSearchParams } from '@angular/http';

import { HttpBaseService } from '../../shared';

import { Client } from 'ng2-f-client-models';

@Injectable()
export class SearchClientService extends HttpBaseService<Client> {
  protected url = 'api/clients';  // URL to web API

  constructor (protected http: Http) { super(http); }

  searchClients(client: Client) {
    let params: URLSearchParams = new URLSearchParams();
    if (client.name) params.set('name', client.name);
    if (client.personalIdentNumber) params.set('personalIdentNumber', client.personalIdentNumber);
    if (client.email) params.set('email', client.email);
    return this.getObjects(this.url, params);
  }

}
