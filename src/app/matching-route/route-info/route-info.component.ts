import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DateTimeModalComponent } from 'src/app/shared/components/date-time-modal/date-time-modal.component';

enum TimeType {
  PickUp,
  Arrival
}

@Component({
  selector: 'app-route-info',
  templateUrl: './route-info.component.html',
  styleUrls: ['./route-info.component.scss'],
})
export class RouteInfoComponent  implements OnInit {

  periodTime: string = '';
  arrivalTime: string = '';

  constructor(
    private datePipe: DatePipe,
    private modalCtrl: ModalController) {}

  ngOnInit() {}

  test() {
    console.log('test');
  }

  

  async openModal(timeType: TimeType) {
    console.log('open modal')
    const modal = await this.modalCtrl.create({
      component: DateTimeModalComponent,
      initialBreakpoint: 0.25,
      breakpoints: [0.25]
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      if(timeType == TimeType.PickUp) {
        this.periodTime = this.datePipe.transform(data, "hh:MM:ss a") ?? "";
      }
      else {
        this.arrivalTime = this.datePipe.transform(data, "hh:MM:ss a") ?? "";
      }
      //this.message = `Hello, ${data}!`;
    }
  }

}
