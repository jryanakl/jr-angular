import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { IDragLegPaneItem } from './models';

@Component({
  imports: [CommonModule, MatIconModule],
  selector: 'jr-drag-leg-items',
  standalone: true,
  styleUrl: './drag-leg-items.scss',
  templateUrl: './drag-leg-items.component.html',
})
export class JrDragLegItemsComponent {
  @Input() items?: Array<IDragLegPaneItem>;
}
