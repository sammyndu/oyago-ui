import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteInfoComponent } from './route-info/route-info.component';
import { MatchingStatusComponent } from './matching-status/matching-status.component';
import { MatchingRecordComponent } from './matching-record/matching-record.component';
import { MatchingPerformanceComponent } from './matching-performance/matching-performance.component';
import { MatchingRouteTabsComponent } from './matching-route-tabs/matching-route-tabs.component';


const routes: Routes = [

  {
    path: '',
    component: MatchingRouteTabsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'route-info',
      },
      {
        path: 'route-info',
        component: RouteInfoComponent,
      },
      {
        path: 'matching-status',
        component: MatchingStatusComponent,
      },
      {
        path: 'matching-record',
        component: MatchingRecordComponent,
      },
      {
        path: 'matching-performance',
        component: MatchingPerformanceComponent,
      },
    ],
},
  
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchingRouteRoutingModule {}
