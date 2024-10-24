import { Component } from '@angular/core';
import { JrLogoComponent } from '../logo/logo.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'jr-navbar',
  templateUrl: './navbar.component.html',
  standalone: true,
  styleUrl: './navbar.component.scss',
  imports: [MatIconModule, JrLogoComponent],
})
export class JrNavbarComponent { }