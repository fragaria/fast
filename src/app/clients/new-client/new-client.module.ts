import { NgModule }            from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FormToolsModule } from 'ng2-f-form-tools';

import { NewClientComponent } from './new-client.component';
import { SharedModule }       from '../../shared';

@NgModule({
  imports: [
    FormToolsModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [
    NewClientComponent,
  ],
  exports: [
    NewClientComponent,
  ],
})
export class NewClientModule { }
