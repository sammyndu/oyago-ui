import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-date-time-modal',
  templateUrl: './date-time-modal.component.html',
  styleUrls: ['./date-time-modal.component.scss'],
})
export class DateTimeModalComponent  implements OnInit {

  time: string = new Date().toISOString();

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  confirm() {
    console.log(this.time)
    this.modalCtrl.dismiss(this.time, 'confirm');
  }

  cancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

}
