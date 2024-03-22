import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthRoutingModule } from './auth-routing.module';
import { SignupPassengerComponent } from './signup-passenger/signup-passenger.component';
import { SignupDriveChoiceComponent } from './signup-drive-choice/signup-drive-choice.component';
import { SignupDriverComponent } from './signup-driver/signup-driver.component';
import { SignupManagerComponent } from './signup-manager/signup-manager.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    SignupComponent, 
    SignupPassengerComponent,
    SignupDriveChoiceComponent,
    SignupDriverComponent,
    SignupManagerComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
