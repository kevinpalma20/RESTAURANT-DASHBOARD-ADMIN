import { NgModule } from '@angular/core';

import { NgChartsModule } from 'ng2-charts';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DonutComponent } from './donut/donut.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [DonutComponent, LoadingComponent],
  exports: [DonutComponent, LoadingComponent],
  imports: [CommonModule, FormsModule, NgChartsModule],
})
export class ComponentsModule {}
