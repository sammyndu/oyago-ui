import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShareComponent } from './share/share.component';
import { LiveLoadingComponent } from './live-loading/live-loading.component';
import { LoadingRecordComponent } from './loading-record/loading-record.component';
import { PerformanceComponent } from './performance/performance.component';
import { ShareRouteTabsComponent } from './share-route-tabs/share-route-tabs.component';

const routes: Routes = [
  {
    path: '',
    component: ShareRouteTabsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'share',
      },
      {
        path: 'share',
        component: ShareComponent,
      },
      {
        path: 'live-loading',
        component: LiveLoadingComponent,
      },
      {
        path: 'loading-record',
        component: LoadingRecordComponent,
      },
      {
        path: 'performance',
        component: PerformanceComponent,
      }
    ],
},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShareRouteRoutingModule {}
