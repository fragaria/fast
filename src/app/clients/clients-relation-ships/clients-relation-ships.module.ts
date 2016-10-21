import { NgModule }                      from '@angular/core';

import { ClientListModule } from 'ng2-f-client-list';

import { ClientsRelationShipsComponent } from './clients-relation-ships.component';
import { ClientsRelationShipsService }   from './clients-relation-ships.service';
import { SharedModule }                  from '../../shared';

@NgModule({
  imports: [
    ClientListModule,
    SharedModule
  ],
  declarations: [
    ClientsRelationShipsComponent
  ],
  exports: [
    ClientsRelationShipsComponent
  ],
  providers: [ ClientsRelationShipsService ]
})
export class ClientsRelationShipsModule { }
