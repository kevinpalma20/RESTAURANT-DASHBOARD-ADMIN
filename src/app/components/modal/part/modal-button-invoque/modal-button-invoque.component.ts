import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-button-invoque',
  templateUrl: './modal-button-invoque.component.html',
})
export class ModalButtonInvoqueComponent {
  @Input() target: string = '';
  @Input() title: string = 'Registrar';
}
