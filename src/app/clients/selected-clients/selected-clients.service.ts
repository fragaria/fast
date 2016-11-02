import * as _         from "lodash";
import { Injectable } from '@angular/core';

import { Client } from 'ng2-f-client-models';

import { Observable } from 'rxjs/Observable';

let SELECTED_CLIENTS: Client[] = [];

@Injectable()
export class SelectedClientsService {

  getClientsArray(): Client[] {
    return SELECTED_CLIENTS
  }

  getClients(): Observable<Client[]> {
    return Observable.of(this.getClientsArray());
  }

  addClient(client: Client): Observable<Client> {
    return Observable.of(this.addToClientsArray(this.getClientsArray(), client))
  }

  deleteClient(client: Client): Observable<Client> {
    return Observable.of(this.removeFromClientsArray(this.getClientsArray(), client))
  }

  addToClientsArray(clients: Client[], client: Client): Client {
    let result = clients.filter((c) => c.id === client.id)
    if (result.length == 0) clients.unshift(client);
    return client
  }

  removeFromClientsArray(clients: Client[], client: Client): Client {
    _.remove(this.getClientsArray(), (c) => c.id === client.id)
    return client
  }
}
