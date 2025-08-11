import { Injectable } from '@angular/core';
import { each } from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class JrDragLegService {
  constructor() {
  }

  public formatPaneItems(panes: any) {
    const panesFormatted = each(panes, (pane: any) => {
      each(pane.items, (item: any) => {
        console.log('item', item);
        return item;
      });
    });

    return panesFormatted;
  }
}
