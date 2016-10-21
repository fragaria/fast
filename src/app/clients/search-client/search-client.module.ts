import { NgModule }            from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FormToolsModule }  from 'ng2-f-form-tools';
import { ClientListModule } from 'ng2-f-client-list';

import { SearchClientComponent }    from './search-client.component';
import { SearchedClientsComponent } from './searched-clients.component';
import { SharedModule }             from '../../shared';

@NgModule({
  imports: [
    FormToolsModule,
    ClientListModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    SearchClientComponent,
    SearchedClientsComponent,
  ],
  exports: [
    SearchClientComponent,
    SearchedClientsComponent,
  ],
})
export class SearchClientModule { }
