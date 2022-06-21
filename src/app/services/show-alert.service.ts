import Swal from 'sweetalert2';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShowAlertService {
  public showMessageError(error: any): void {
    Swal.fire({
      title: error.error.message,
      text: error.error.error,
      icon: 'error',
    });
  }

  public showMessageSuccess(text: string): void {
    Swal.fire({ text, icon: 'success' });
  }

  public showToast(text: string, success: boolean): void {
    Swal.fire({
      text: text,
      icon: success ? 'success' : 'error',
      customClass: { container: 'position-absolute' },
      toast: true,
      position: 'bottom-right',
    });
  }
}
