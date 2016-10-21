import * as _         from "lodash";
import { Injectable } from '@angular/core';

import { Client }              from 'ng2-f-client-models';
import { CLIENTS_REMOTE_DATA } from './client.data';

@Injectable()
export class ClientService {

  getClients() {
    return new Promise<Client[]>(resolve => {
      resolve(CLIENTS_REMOTE_DATA);
    });
  }

  addClient(client: Client) {
    return this.getClients()
      .then(clients => this.addNewToClients(clients, client));
  }

  addNewToClients(clients: Client[], client: Client): Client {
    let max: number = -1;
    let result: Client = null;

    for (let c of clients) {
      if (c.id == client.id || c.personalIdentNumber == client.personalIdentNumber) result = c;
      if (c.id > max) max = c.id;
    }
    if (result == null) {
      client.id = ++max;
      clients.push(client);
      result = client;
    }

    return result
  }
}
