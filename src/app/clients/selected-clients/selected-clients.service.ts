import * as _         from "lodash";
import { Injectable } from '@angular/core';

import { Client } from 'ng2-f-client-models';

let SELECTED_CLIENTS: Client[] = [];

@Injectable()
export class SelectedClientsService {

  getClients() {
    return new Promise<Client[]>(resolve => {
      resolve(SELECTED_CLIENTS);
    });
  }

  addClient(client: Client) {
    return this.getClients()
      .then(clients => this.addToClients(clients, client));
  }

  deleteClient(client: Client) {
    return this.getClients()
      .then(clients => _.remove(clients, (c) => c.id === client.id));
  }

  addToClients(clients: Client[], client: Client) {
    let result = clients.filter((c) => c.id === client.id)
    if (result.length == 0) clients.unshift(client);
    return client
  }
}
