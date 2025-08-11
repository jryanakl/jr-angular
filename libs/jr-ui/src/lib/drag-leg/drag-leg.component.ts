import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

import { JrDragLegItemsComponent } from './drag-leg-items.component';
import { JrDragLegService } from './drag-leg.service';
import { IDragLegPane } from './models';

@Component({
  imports: [
    CommonModule,
    DragDropModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    JrDragLegItemsComponent
  ],
  selector: 'jr-drag-leg',
  standalone: true,
  styleUrl: './drag-leg.scss',
  templateUrl: './drag-leg.component.html'
})
export class JrDragLegComponent implements OnInit {
  @Input() header: string = '';
  @Input() panes: Array<IDragLegPane> = [];

  @Output() toggleSelected = new EventEmitter<boolean>();

  isJrDragLegOpen = false;

  constructor(protected legend: JrDragLegService) {
  }

  ngOnInit() {
    this.header = this.header ? this.header : 'Map Legend';
    this.panes = this.legend.formatPaneItems(this.panes);
  }

  toggleJrDragLegOpen() {
    this.isJrDragLegOpen = !this.isJrDragLegOpen;
  }
}
