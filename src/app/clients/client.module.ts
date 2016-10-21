import { NgModule }                      from '@angular/core';

import { ClientComponent }               from './client.component';
import { clientsRouting }                from './client.routing';
import { ClientService }                 from './client.service';
import { ClientsRelationShipsModule }    from './clients-relation-ships';
import { NewClientModule }               from './new-client';
import { SearchClientModule,
         SearchClientService}            from './search-client';
import { SelectedClientsModule,
         SelectedClientsService }        from './selected-clients';
import { SharedModule }                  from '../shared';

@NgModule({
  imports: [
    SharedModule,
    ClientsRelationShipsModule,
    NewClientModule,
    SearchClientModule,
    SelectedClientsModule,
    clientsRouting
  ],
  declarations: [
    ClientComponent
  ],
  exports: [
    ClientComponent
  ],
  providers: [
    ClientService,
    SearchClientService,
    SelectedClientsService
  ]
})
export class ClientModule { }
