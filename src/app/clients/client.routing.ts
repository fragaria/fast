import { ModuleWithProviders } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';

import { ClientComponent }   from './client.component';

const routes: Routes = [
  { path: 'clients', component: ClientComponent }
];

export const clientsRouting: ModuleWithProviders = RouterModule.forChild(routes);
