import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SecurityRouteChoiceComponent } from './security-route-choice/security-route-choice.component';
import { SecurityRoutingModule } from './security-routing.module';



@NgModule({
  declarations: [
    SecurityRouteChoiceComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    SecurityRoutingModule
  ]
})
export class SecurityModule { }
