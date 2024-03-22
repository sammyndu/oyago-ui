import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerifyComponent } from './verify/verify.component';
import { SelectRouteComponent } from './select-route/select-route.component';


const routes: Routes = [
  {
    path: '',
    component: VerifyComponent,
  },
  {
    path: 'select',
    component: SelectRouteComponent,
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouteChoiceRoutingModule {}
