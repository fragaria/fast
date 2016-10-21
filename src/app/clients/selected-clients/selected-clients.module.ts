import { NgModule }                      from '@angular/core';

import { ClientListModule }              from 'ng2-f-client-list';

import { SelectedClientsComponent }      from './selected-clients.component';
import { SharedModule }                  from '../../shared';

@NgModule({
  imports: [
    ClientListModule,
    SharedModule,
  ],
  declarations: [
    SelectedClientsComponent,
  ],
  exports: [
    SelectedClientsComponent,
  ],
})
export class SelectedClientsModule { }
