import { Component, Input } from '@angular/core';

import { Client }                 from 'ng2-f-client-models';
import { SelectedClientsService } from '../selected-clients';

@Component({
  selector: 'ng2-f-searched-clients',
  templateUrl: 'searched-clients.component.html'
})
export class SearchedClientsComponent {
  @Input() isActive: boolean;
  _clients: Client[] | Promise<Client[]>;
  listLabel: string = 'Nalezení klienti:';
  selectLabel: string = 'Vybrat';

  @Input()
  set clients(clients: Client[] | Promise<Client[]>) {
    if (clients instanceof Array) {
      this._clients = new Promise<Client[]>(resolve => {
        resolve(clients);
      });
    }
  }

  get clients(): Client[] | Promise<Client[]> {
    return this._clients
  }

  constructor(
    private selectedClientService: SelectedClientsService) { }

  clientSelected(client: Client) {
    this.selectedClientService.addClient(client);
  }

  closeIt() {
    this.isActive = false;
  }
}
