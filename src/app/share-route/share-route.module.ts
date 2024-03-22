import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareComponent } from './share/share.component';
import { IonicModule } from '@ionic/angular';
import { ShareRouteRoutingModule } from './share-route-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LiveLoadingComponent } from './live-loading/live-loading.component';
import { LoadingRecordComponent } from './loading-record/loading-record.component';
import { PerformanceComponent } from './performance/performance.component';


@NgModule({
  declarations: [
    ShareComponent,
    LiveLoadingComponent,
    LoadingRecordComponent,
    PerformanceComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
    ShareRouteRoutingModule
  ]
})
export class ShareRouteModule { }
