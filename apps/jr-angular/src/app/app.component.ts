import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ProductListComponent } from './features/product/product-list.component';
import { JrDashboardComponent } from '../../../../libs/jr-ui/src/lib/dashboard/dashboard.component';
import { JrDragLegComponent } from '../../../../libs/jr-ui/src/lib/drag-leg/drag-leg.component';
import { JrLogoComponent } from '../../../../libs/jr-ui/src/lib/logo/logo.component';
import { JrNavbarComponent } from "../../../../libs/jr-ui/src/lib/navbar/navbar.component";
import { DragLegDefaultTools } from '../../../../libs/jr-ui/src/lib/drag-leg/config';
import { IDragLegPane } from '../../../../libs/jr-ui/src/lib/drag-leg/models';

@Component({
  selector: 'app-root',
  standalone: true,
  styleUrl: './app.component.scss',
  imports: [
    CommonModule,
    MatDividerModule,
    MatSlideToggleModule,
    ProductListComponent,
    JrDashboardComponent,
    JrDragLegComponent,
    JrLogoComponent,
    JrNavbarComponent
  ],
  template: `
    <header class="jr-header">
      <jr-navbar class="jr-header__navbar"></jr-navbar>
      <section class="jr-header__section">
        <h1 class="jr-header__primary-header">JR Angular</h1>
        <h2 class="jr-header__secondary-header">Code Samples using Angular</h2>
      </section>
    </header>
    <main class="jr-main">
      <section class="jr-main__section jr-drag-leg__wrapper">
        <h2 class="jr-main__secondary-header">Custom UI Components</h2>
        <article class="jr-main__article">
          <div class="jr-main__article__code">
            <jr-drag-leg [panes]="legendPanes"></jr-drag-leg>
          </div>
          <p class="jr-main__article__text"><strong>Map Legend</strong>: A draggable map legend provides a clear explanation of the symbols used on the map, allowing users to easily expand or collapse it as needed.</p>
        </article>
      </section>
      <mat-divider></mat-divider>
      <section class="jr-main__section">
        <h2 class="jr-main__secondary-header">Charts</h2>
        <article class="jr-main__article">
          <div class="jr-main__article__code">
            <jr-dashboard></jr-dashboard>
          </div>
          <p class="jr-main__article__text"><strong>Accessible High Chart Instance for Temperature Data</strong>:  This plays around with high chart's accessibility features. This instance visualizes temperature variations throughout the year using line and column chart types. Users can dynamically add and remove new temperature series through intuitive buttons, enhancing data exploration and analysis.</p>
        </article>
      </section>
      <mat-divider></mat-divider>
      <section class="jr-main__section">
        <h2 class="jr-main__secondary-header">Products</h2>
        <article class="jr-main__article">
          <div class="jr-main__article__code">
            <product-list></product-list>
          </div>
        </article>
      </section>
    </main>
    <footer class="jr-footer">
      <div class="jr-footer__logo">
        <jr-logo></jr-logo>
      </div>
    </footer>
  `,
})
export class AppComponent {
  title = 'default';
  legendPanes: [IDragLegPane] = [{
    items: [
      ...DragLegDefaultTools,
      {
        label: 'HTML',
        icon: 'html',
      },
      {
        label: 'JavaScript',
        icon: 'javascript',
      },
      {
        label: 'API',
        icon: 'api',
      },
      {
        label: 'Webhook',
        icon: 'webhook',
      },
      {
        label: 'PHP',
        icon: 'php',
      },
      {
        label: 'Integration Instructions',
        icon: 'integration_instructions',
      },
      {
        label: 'Code Blocks',
        icon: 'code_blocks',
      },
      {
        label: 'Code Off',
        icon: 'code_off',
      },
      {
        label: 'Developer Board',
        icon: 'developer_board',
      },
    ],
  }];

  ngOnInit(): void {
    console.log(`legendPanes`, this.legendPanes);
  }
}
