import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormGroup, Validators }                  from '@angular/forms';
import { Router, ActivatedRoute }                 from '@angular/router';

import {
  anyRequiredValidator,
  emailValidator,
  personalIdentNumberValidator,
  FormManager,
  FormManagerBuilderService } from 'ng2-f-form-tools';
import { Client }             from 'ng2-f-client-models';

import { ClientService }          from '../client.service';
import { SearchClientService }    from './search-client.service';
import { SelectedClientsService } from '../selected-clients';


@Component({
  selector: 'ng2-f-search-client',
  templateUrl: 'search-client.component.html'
})
export class SearchClientComponent implements OnInit {

  @Output() searched = new EventEmitter<Client[]>();
  @Output() notSearched = new EventEmitter<Client>();
  client:Client = new Client(null, '', '', '');
  baseMessage = 'Vyhledat:';
  message = this.baseMessage;
  submitted = false;

  onSubmit() {
    this.client = new Client(null, '', '', '');
    this.client.update(this.clientFormManager.form.value);
    this.searchClientService.searchClients(this.client).then(
      clients => this.processClientsAfterSubmit(clients)
    );
  }

  processClientsAfterSubmit(clients: Client[]) {
    if (clients.length != 0) {
      this.searched.emit(clients);
    } else {
      this.notSearched.emit(this.client);
    }
  }

  // Reset the form with a new client AND restore 'pristine' class state
  // by toggling 'active' flag which causes the form
  // to be removed/re-added in a tick via NgIf
  // TODO: Workaround until NgForm has a reset method (#6822)
  active = true;

  cleanForm() {
    this.client = new Client(null, '', '', '');
    this.buildFormManager();

    this.active = false;
    setTimeout(() => this.active = true, 0);
  }

  clientFormManager: FormManager;
  constructor(private fmb: FormManagerBuilderService,
              private clientService: ClientService,
              private searchClientService: SearchClientService,
              private selectedClientService: SelectedClientsService) { }

  ngOnInit(): void {
    this.buildFormManager();
  }

  buildFormManager(): void {
    this.clientFormManager = this.fmb.buildFormManager({
      'name': [this.client.name, [
          Validators.minLength(3),
          Validators.maxLength(100)
        ]
      ],
      'personalIdentNumber': [this.client.personalIdentNumber, [
          personalIdentNumberValidator()
        ]
      ],
      'email': [this.client.email, [
          emailValidator()
        ]
      ]
    }, {validator: anyRequiredValidator('name', 'personalIdentNumber', 'email')});

  }

}
