import { ChartData } from 'chart.js';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphica1',
  templateUrl: './graphica1.component.html',
  styles: [],
})
export class Graphica1Component {
  public dataGraphics1: ChartData<'doughnut'> = {
    labels: ['A', 'B', 'C'],
    datasets: [{ data: [96, 56, 100] }],
  };

  public dataGraphics2: ChartData<'doughnut'> = {
    labels: ['F', 'G', 'H'],
    datasets: [{ data: [69, 12, 2] }],
  };
}
