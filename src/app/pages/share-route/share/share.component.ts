import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss'],
})
export class ShareComponent  implements OnInit {
  
  @ViewChild(IonModal) modal!: IonModal;

  constructor() { }

  ngOnInit() {}

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss('test', 'confirm');
  }

  onWillDismiss(event: any) {
    const ev = event;
    if (ev.detail.role === 'confirm') {
      //this.message = `Hello, ${ev.detail.data}!`;
    }
  }

}
