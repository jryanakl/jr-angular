import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'jr-paginator',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./paginator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './paginator.component.html',
})
export class JrPaginatorComponent {
  @Input() total = 0;
  @Input() page = 1;
  @Input() pageSize = 10;

  @Output() pageChange = new EventEmitter<number>();

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.total / this.pageSize));
  }

  goToPage(p: number): void {
    if (p >= 1 && p <= this.totalPages && p !== this.page) {
      this.pageChange.emit(p);
    }
  }
}
