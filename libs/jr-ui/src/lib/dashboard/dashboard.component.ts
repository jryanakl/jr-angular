import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { HighchartsChartModule } from 'highcharts-angular';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import * as Highcharts from 'highcharts';
import AccessibilityModule from 'highcharts/modules/accessibility';
import { Options } from 'highcharts';

// Initialize the module
AccessibilityModule(Highcharts);

type ChartType = 'line' | 'column';

@Component({
  selector: 'jr-dashboard',
  templateUrl: './dashboard.component.html',
  standalone: true,
  styleUrl: './dashboard.component.scss',
  imports: [CommonModule, MatIconModule, MatButtonModule, HighchartsChartModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JrDashboardComponent {
  Highcharts: typeof Highcharts = Highcharts; // Required for the Highcharts Angular component

  @ViewChild('chart') componentRef: any;
  chartRef: any;
  currentChartType: ChartType = 'line';
  nonCurrentChartType: ChartType = this.currentChartType === 'line' ? 'column' : 'line';
  chartSeriesNumber = 1;
  chartOptions: Options = {
    accessibility: {
      description: 'This chart shows average monthly temperatures for one year, providing a visual representation of how the temperature varies over different months.',
      enabled: true,
      keyboardNavigation: {
        enabled: true,  // Allow keyboard navigation
      },
      point: {
        descriptionFormatter: function (point) {
          return `Month: ${point.category}, Temperature: ${point.y} degrees.`;
        }
      },
      announceNewData: {
        enabled: true,
        announcementFormatter: function (newData: any) {
          return `New data point added: ${newData?.point?.name}, with value ${newData?.point?.y}`;
        }
      }
    },
    chart: {
      type: 'line',
      events: {
        load() {
          console.log(Highcharts.charts);
        },
      },
    },
    title: {
      text: 'Monthly Average Temperature'
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    series: [
      {
        type: 'line',
        name: `Temperature ${this.chartSeriesNumber}`,
        data: [7, 6, 9, 14, 18, 21, 25, 26, 23, 18, 13, 9]
      }
    ],
    colors: ['#2f7ed8', '#0d233a', '#8bbc21', '#910000', '#1aadce'],  // High contrast colors
  };
  updateChartFlag: any;

  onChartCallback: Highcharts.ChartCallbackFunction = chart => {
    this.chartRef = chart;
  };

  addNewSeries(): void {
    setTimeout(() => {
      this.chartSeriesNumber++;
      this.chartRef.addSeries({
        type: this.currentChartType,
        name: `Temperature ${this.chartSeriesNumber}`,
        data: [
          Math.floor(Math.random() * 10),
          Math.floor(Math.random() * 10),
          Math.floor(Math.random() * 10),
          Math.floor(Math.random() * 10),
          Math.floor(Math.random() * 10),
          Math.floor(Math.random() * 10),
          Math.floor(Math.random() * 10),
          Math.floor(Math.random() * 10),
          Math.floor(Math.random() * 10),
          Math.floor(Math.random() * 10),
          Math.floor(Math.random() * 10),
          Math.floor(Math.random() * 10)
        ]
      });
    }, 300);
  }

  toggleChartType(): void {
    // Toggle between 'line' and 'column'
    this.currentChartType = this.currentChartType === 'line' ? 'column' : 'line';
    this.nonCurrentChartType = this.currentChartType === 'line' ? 'column' : 'line';

    // Update the chart with the new type for all series
    this.chartRef.update({
      chart: {
        type: this.currentChartType
      }
    });

    // Loop through each series and update its type
    this.chartRef.series.forEach((series: Highcharts.Series) => {
      series.update({
        type: this.currentChartType
      });
    });
  }
}