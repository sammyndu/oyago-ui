import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecurityRouteChoiceComponent } from './security-route-choice/security-route-choice.component';

const routes: Routes = [
  {
    path: '',
    component: SecurityRouteChoiceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule {}
