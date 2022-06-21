import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-model-header',
  templateUrl: './modal-header.component.html',
})
export class ModelHeaderComponent {
  @Input() title: string = '';
}
