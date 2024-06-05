import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AccessRouteRoutingModule } from './access-route-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { RouteListComponent } from './route-list/route-list.component';
import { MatchingRouteListComponent } from './matching-route-list/matching-route-list.component';
import { PassengerPerformanceComponent } from './passenger-performance/passenger-performance.component';
import { StarRatingModule } from 'angular-star-rating';
import { AccessRouteTabsComponent } from './access-route-tabs/access-route-tabs.component';



@NgModule({
  declarations: [
    HomeComponent,
    RouteListComponent,
    MatchingRouteListComponent,
    PassengerPerformanceComponent,
    AccessRouteTabsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    StarRatingModule,
    AccessRouteRoutingModule,
    IonicModule
  ]
})
export class AccessRouteModule { }
