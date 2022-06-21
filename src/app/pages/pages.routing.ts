import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';

import { AuthGuard } from '../guards/auth.guard';

import { PagesComponent } from './pages.component';

import { Graphica1Component } from './dashboard-plane/graphica1/graphica1.component';
import { DashboardComponent } from './dashboard-plane/notifies/dashboard.component';
import { AccountSettingsComponent } from './dashboard-plane/account-settings/account-settings.component';

import { UserComponent } from './mantiniences/user/user.component';
import { BoardComponent } from './mantiniences/board/board.component';
import { EnviromentComponent } from './mantiniences/enviroment/enviroment.component';
import { CartComponent } from './mantiniences/cart/cart.component';
import { DeliveryUnitComponent } from './mantiniences/delivery-unit/delivery-unit.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: DashboardComponent },
      {
        path: 'graphical',
        component: Graphica1Component,
      },
      { path: 'settings', component: AccountSettingsComponent },

      //Mantiniences
      { path: 'users', component: UserComponent },

      { path: 'enviroment', component: EnviromentComponent },
      { path: 'boards', component: BoardComponent },
      { path: 'delivery-unit', component: DeliveryUnitComponent },
      { path: 'cart/:name', component: CartComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
