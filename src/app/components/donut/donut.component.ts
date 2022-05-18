import { ChartData } from 'chart.js';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styles: [],
})
export class DonutComponent {
  @Input() title: string = 'Sales';

  @Input('datasGraphics') datasGraphics: ChartData<'doughnut'> = {
    labels: [],
    datasets: [],
  };

  public chartClicked({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }
}
