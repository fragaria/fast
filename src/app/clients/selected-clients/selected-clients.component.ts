import { Component, OnInit }      from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Client }                 from 'ng2-f-client-models';
import { SelectedClientsService } from './selected-clients.service';

@Component({
  selector: 'ng2-f-selected-clients',
  template: require('./selected-clients.component.html')
})
export class SelectedClientsComponent implements OnInit {
  clients: Promise<Client[]>;
  listLabel: string = 'Výběr:';

  constructor(
    private selectedClientService: SelectedClientsService) { }

  ngOnInit() {
    this.clients = this.selectedClientService.getClients();
  }

  clientSelected(client: Client) {
    this.selectedClientService.deleteClient(client);
  }

}
