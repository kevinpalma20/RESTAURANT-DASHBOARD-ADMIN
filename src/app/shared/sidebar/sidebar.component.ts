import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [],
})
export class SidebarComponent {
  constructor(
    public sidebarService: SidebarService,
    private auth: AuthenticationService
  ) {}

  logOut() {
    this.auth.logOut();
  }
}
