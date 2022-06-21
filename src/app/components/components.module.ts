import { NgModule } from '@angular/core';

import { NgChartsModule } from 'ng2-charts';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DonutComponent } from './donut/donut.component';
import { LoadingComponent } from './loading/loading.component';
import { ModelUserComponent } from './modal/modal-user/modal-user.component';
import { ModelCloseComponent } from './modal/part/modal-close/modal-close.component';
import { ModelButtonsComponent } from './modal/part/modal-buttons/modal-buttons.component';
import { ModelHeaderComponent } from './modal/part/modal-header/modal-header.component';
import { ModalButtonInvoqueComponent } from './modal/part/modal-button-invoque/modal-button-invoque.component';

@NgModule({
  declarations: [
    DonutComponent,
    LoadingComponent,
    ModelUserComponent,
    ModelCloseComponent,
    ModelButtonsComponent,
    ModelHeaderComponent,
    ModalButtonInvoqueComponent,
  ],
  exports: [
    DonutComponent,
    LoadingComponent,
    ModelUserComponent,
    ModelCloseComponent,
    ModelButtonsComponent,
    ModelHeaderComponent,
    ModalButtonInvoqueComponent,
  ],
  imports: [CommonModule, FormsModule, NgChartsModule],
})
export class ComponentsModule {}
