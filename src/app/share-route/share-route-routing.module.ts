import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShareComponent } from './share/share.component';
import { LiveLoadingComponent } from './live-loading/live-loading.component';
import { LoadingRecordComponent } from './loading-record/loading-record.component';

const routes: Routes = [
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShareRouteRoutingModule {}
