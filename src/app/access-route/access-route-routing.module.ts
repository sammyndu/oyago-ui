import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RouteListComponent } from './route-list/route-list.component';
import { MatchingRouteListComponent } from './matching-route-list/matching-route-list.component';
import { PassengerPerformanceComponent } from './passenger-performance/passenger-performance.component';
import { AccessRouteTabsComponent } from './access-route-tabs/access-route-tabs.component';


const routes: Routes = [
    {
        path: '',
        component: AccessRouteTabsComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'share-route',
          },
          {
            path: 'share-route',
            component: RouteListComponent,
          },
          {
            path: 'matching-route',
            component: MatchingRouteListComponent,
          },
          {
            path: 'performance',
            component: PassengerPerformanceComponent,
          },
          {
            path: 'home/auth',
            loadChildren: () => import('../home/home.module').then((m) => m.HomePageModule),
          },
        ],
    },
  {
    path: 'home',
    component: HomeComponent,
  },
 
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccessRouteRoutingModule {}
