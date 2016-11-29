import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions, URLSearchParams } from '@angular/http';

import { HttpRestJsonService } from '../../core';

import { Client } from 'ng2-f-client-models';

@Injectable()
export class SearchClientService {
  protected url = 'api/clients';  // URL to web API
  protected model = Client;

  constructor (protected http: HttpRestJsonService<Client>) { }

  searchClients(client: Client) {
    let params: URLSearchParams = new URLSearchParams();
    if (client.name) params.set('name', client.name);
    if (client.personalIdentNumber) params.set('personalIdentNumber', client.personalIdentNumber);
    if (client.email) params.set('email', client.email);
    return this.http.getObjects(this.url, { model: this.model, params: params });
  }

}
