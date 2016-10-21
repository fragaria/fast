import { Injectable } from '@angular/core';

import { Client }              from 'ng2-f-client-models';
import { CLIENTS_REMOTE_DATA } from '../client.data';

@Injectable()
export class SearchClientService {

  getClients() {
    return new Promise<Client[]>(resolve => {
      resolve(CLIENTS_REMOTE_DATA);
    });
  }

  searchClients(client: Client) {
    return this.getClients()
      .then(clients => clients.filter((c) => this.isWantedClient(c, client)));
  }

  isWantedClient(client: Client, wantedClient: Client): boolean {
    return (wantedClient.name == client.name) ||
           (wantedClient.email == client.email) ||
           (wantedClient.personalIdentNumber == client.personalIdentNumber)
  }
}
