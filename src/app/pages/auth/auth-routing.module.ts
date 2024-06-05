import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SignupPassengerComponent } from './signup-passenger/signup-passenger.component';
import { SignupDriveChoiceComponent } from './signup-drive-choice/signup-drive-choice.component';
import { SignupDriverComponent } from './signup-driver/signup-driver.component';
import { SignupManagerComponent } from './signup-manager/signup-manager.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup-passenger',
    component: SignupPassengerComponent,
  },
  {
    path: 'signup-driver-choice',
    component: SignupDriveChoiceComponent,
  },
  {
    path: 'signup-driver',
    component: SignupDriverComponent,
  },
  {
    path: 'signup-manager',
    component: SignupManagerComponent,
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
