import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { routing }      from './app.routing';
import { ItemModule }   from './item';
import { ClientModule } from './clients';
import { SharedModule } from './shared';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    SharedModule,
    ItemModule,
    ClientModule
  ],
  declarations: [AppComponent],
  exports: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
