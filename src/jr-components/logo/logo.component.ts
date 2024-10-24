import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'jr-logo',
  templateUrl: './logo.component.html',
  standalone: true,
  styleUrl: './logo.component.scss',
  imports: [MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JrLogoComponent { }