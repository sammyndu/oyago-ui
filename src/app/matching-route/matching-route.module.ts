import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteInfoComponent } from './route-info/route-info.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { MatchingRouteRoutingModule } from './matching-route-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MatchingStatusComponent } from './matching-status/matching-status.component';
import { MatchingRecordComponent } from './matching-record/matching-record.component';
import { MatchingPerformanceComponent } from './matching-performance/matching-performance.component';
import { MatchingRouteTabsComponent } from './matching-route-tabs/matching-route-tabs.component';
import { StarRatingModule } from 'angular-star-rating';



@NgModule({
  declarations: [
    RouteInfoComponent,
    MatchingStatusComponent,
    MatchingRecordComponent,
    MatchingPerformanceComponent,
    MatchingRouteTabsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    MatchingRouteRoutingModule,
    StarRatingModule.forRoot()
  ]
})
export class MatchingRouteModule { }
