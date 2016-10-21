import { Component }              from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Client } from 'ng2-f-client-models';

@Component({
  selector: 'ng2-f-client',
  template: require('./client.component.html'),
  styles: require('./client.component.scss').default
})
export class ClientComponent {
  clients: Client[] | Promise<Client[]>;
  client: Client;
  isNewFormVisible: boolean;

  searched(clients: Client[] | Promise<Client[]>) {
    this.clients = clients;
  }

  notSearched(client: Client) {
    this.client = client;
    this.isNewFormVisible = true;
  }

}
