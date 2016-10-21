import { Injectable } from '@angular/core';

import { Client } from 'ng2-f-client-models';

const CLIENTS_RELATION_SHIP: { [id: number] : Client[]; } = {};
CLIENTS_RELATION_SHIP[1] = [
  new Client(13, "Karel Vomáčka", "9007260987", "karel@michal.cz"),
  new Client(14, "Janek Paprika", "7807260987", "janek@michal.cz"),
];

const EMPTY_RELATION_SHIP_ARRAY: Client[] = [];

@Injectable()
export class ClientsRelationShipsService {

  getRelatedClients(clientId?: number | string) {
    let targetArray: Client[] = EMPTY_RELATION_SHIP_ARRAY;
    clientId = +clientId;
    if (clientId && clientId in CLIENTS_RELATION_SHIP) {
      targetArray = CLIENTS_RELATION_SHIP[clientId];
    }
    return new Promise<Client[]>(resolve => {
      resolve(targetArray);
    });
  }
}
