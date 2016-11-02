import { Component, OnInit }      from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Client }                 from 'ng2-f-client-models';
import { SelectedClientsService } from './selected-clients.service';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'ng2-f-selected-clients',
  templateUrl: 'selected-clients.component.html'
})
export class SelectedClientsComponent implements OnInit {
  clients: Observable<Client[]>;
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
