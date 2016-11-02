import { Component, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute }       from '@angular/router';

import { Client } from 'ng2-f-client-models';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'ng2-f-client',
  templateUrl: './client.component.html',
  styleUrls: ['client.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ClientComponent {
  clients: Client[] | Observable<Client[]>;
  client: Client;
  isNewFormVisible: boolean;

  searched(clients: Client[] | Observable<Client[]>) {
    this.clients = clients;
  }

  notSearched(client: Client) {
    this.client = client;
    this.isNewFormVisible = true;
  }

}
