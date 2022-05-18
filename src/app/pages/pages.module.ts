import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

import { DashboardComponent } from './dashboard-plane/notifies/dashboard.component';
import { Graphica1Component } from './dashboard-plane/graphica1/graphica1.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './dashboard-plane/account-settings/account-settings.component';
import { UserComponent } from './mantiniences/user/user.component';

@NgModule({
  declarations: [
    DashboardComponent,
    Graphica1Component,
    PagesComponent,
    AccountSettingsComponent,
    UserComponent,
  ],
  exports: [DashboardComponent, Graphica1Component, PagesComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule,
    ComponentsModule,
  ],
})
export class PagesModule {}
