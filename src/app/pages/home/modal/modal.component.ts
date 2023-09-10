import { Component } from '@angular/core';
import { SwitchService } from 'src/app/core/service/modal/switch.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  showModal: boolean = false;

  constructor(private modalSS: SwitchService) {
    // Suscribirse al evento $modal para saber cuándo mostrar el modal
    this.modalSS.$modal.subscribe((value) => {
      console.log('Valor showModal:', value);
      this.showModal = value;
    });
  }



  closeModal() {
    this.showModal = false;

  }

}
