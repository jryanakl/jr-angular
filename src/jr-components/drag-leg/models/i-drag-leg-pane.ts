import { IDragLegPaneItem } from './i-drag-leg-pane-item';

export interface IDragLegPane {
  items: Array<IDragLegPaneItem>;
  name?: string;
}
