import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ViewDidEnter, ViewWillEnter } from '@ionic/angular'

@Component({
  selector: 'app-payment-modal',
  templateUrl: './payment-modal.component.html',
  styleUrls: ['./payment-modal.component.scss'],
})
export class PaymentModalComponent  implements OnInit, ViewDidEnter {
  @Input() title!: string;
  @Input() content!: string;
  @Input() url!: string;

  @Input() buttonText!: string;

  constructor(private router: Router, private modalCtrl: ModalController) { }
  
  ngOnInit() {}
  
  ionViewDidEnter(): void {
    // setTimeout(() => {
    //   this.router.navigate(['/home/dashboard'])
    // }, 5000);
    // throw new Error('Method not implemented.');
  }

  submit() {
    this.modalCtrl.dismiss();
    this.router.navigate([this.url]);
  }
  

}
