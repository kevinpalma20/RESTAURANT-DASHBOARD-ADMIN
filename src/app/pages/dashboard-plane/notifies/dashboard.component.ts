import { Component, OnInit } from '@angular/core';

import { Client, IFrame, IMessage } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';

import { NotifyResponse } from 'src/app/model/NotifyResponse';
import { SERVICE } from 'src/environments/environment.prod';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [],
})
export class DashboardComponent implements OnInit {
  private client: Client = new Client();
  public array: NotifyResponse[] = [];

  constructor() {}

  ngOnInit(): void {
    this.client.activate();

    this.client.webSocketFactory = (): any =>
      new SockJS(SERVICE + '/chat-websocket');

    this.client.onConnect = (frame: IFrame) =>
      this.client.subscribe('/notify/message', (e: IMessage) =>
        this.array.push(JSON.parse(e.body) as NotifyResponse)
      );
  }
}
