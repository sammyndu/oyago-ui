import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentModalComponent } from './components/payment-modal/payment-modal.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { DateTimeModalComponent } from './components/date-time-modal/date-time-modal.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PaymentModalComponent,
    DateTimeModalComponent
  ],
  exports: [
    PaymentModalComponent,
    DateTimeModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule
  ]
})
export class SharedModule { }
