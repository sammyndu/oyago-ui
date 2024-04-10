import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerifyComponent } from './verify/verify.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouteChoiceRoutingModule } from './route-choice-routing.module';
import { SelectRouteComponent } from './select-route/select-route.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [VerifyComponent, SelectRouteComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    RouteChoiceRoutingModule
  ]
})
export class RouteChoiceModule { }
