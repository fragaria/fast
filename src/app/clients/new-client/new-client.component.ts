import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormGroup, Validators }                         from '@angular/forms';
import { Router, ActivatedRoute }                        from '@angular/router';

import {
  emailValidator,
  personalIdentNumberValidator,
  FormManager,
  FormManagerBuilderService
} from 'ng2-f-form-tools';

import { Client }                                       from 'ng2-f-client-models';
import { ClientService }                                from '../client.service';
import { SelectedClientsService }                       from '../selected-clients';


@Component({
  selector: 'ng2-f-new-client',
  templateUrl: 'new-client.component.html'
})
export class NewClientComponent implements OnInit {

  _client:Client = new Client(null, '', '', '');
  baseMessage = 'Uživatel nenalezen:';
  message = this.baseMessage;
  @Input() isVisible:boolean = false;

  @Input()
  set client(client: Client) {
    if (client != undefined && client != null) {
      let data = {};
      for (let attr of client.attributesForCopy) {
        if (attr != 'id') data[attr] = client[attr];
      }
      this.newClientFormManager.form.patchValue(data);
    }
  }

  get client() {
    return this._client
  }

  onSubmit() {
    this.client.update(this.newClientFormManager.form.value);
    this.clientService.addClient(this.client).then(
      client => this.selectedClientService.addClient(client)
    ).then(
      client => this.processAfterClientAdded(client)
    );
  }

  processAfterClientAdded(client: Client) {
    this.message = this.baseMessage;
    this.isVisible = false;
    this.cleanForm()
  }

  // Reset the form with a new client AND restore 'pristine' class state
  // by toggling 'active' flag which causes the form
  // to be removed/re-added in a tick via NgIf
  // TODO: Workaround until NgForm has a reset method (#6822)
  active = true;

  cleanForm() {
    this._client = new Client(null, '', '', '');
    this.buildFormManager();

    this.active = false;
    setTimeout(() => this.active = true, 0);
  }

  newClientFormManager: FormManager;
  constructor(private fbm: FormManagerBuilderService,
              private clientService: ClientService,
              private selectedClientService: SelectedClientsService) { }

  ngOnInit(): void {
    this.buildFormManager();
  }

  buildFormManager(): void {
    this.newClientFormManager = this.fbm.buildFormManager({
      'name': [this.client.name, [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100)
        ]
      ],
      'personalIdentNumber': [this.client.personalIdentNumber, [
          Validators.required,
          personalIdentNumberValidator()
        ]
      ],
      'email': [this.client.email, [
          Validators.required,
          emailValidator()
        ]
      ]
    });
  }

}
