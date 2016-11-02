import { Component, Input } from '@angular/core';

import { Client }                 from 'ng2-f-client-models';
import { SelectedClientsService } from '../selected-clients';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'ng2-f-searched-clients',
  templateUrl: 'searched-clients.component.html'
})
export class SearchedClientsComponent {
  @Input() isActive: boolean;
  @Input() clients: Client[] | Observable<Client[]>;
  listLabel: string = 'Nalezení klienti:';
  selectLabel: string = 'Vybrat';

  constructor(
    private selectedClientService: SelectedClientsService) { }

  clientSelected(client: Client) {
    this.selectedClientService.addClient(client);
  }

  closeIt() {
    this.isActive = false;
  }
}
