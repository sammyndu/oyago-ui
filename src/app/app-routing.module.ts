import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then( m => m.AuthModule)
  },
  {
    path: 'security',
    loadChildren: () => import('./pages/security/security.module').then( m => m.SecurityModule)
  },
  {
    path: 'share-route',
    loadChildren: () => import('./pages/share-route/share-route.module').then( m => m.ShareRouteModule)
  },
  {
    path: 'route-choice',
    loadChildren: () => import('./pages/route-choice/route-choice.module').then( m => m.RouteChoiceModule)
  },
  {
    path: 'matching-route',
    loadChildren: () => import('./pages/matching-route/matching-route.module').then( m => m.MatchingRouteModule)
  },
  {
    path: 'access-route',
    loadChildren: () => import('./pages/access-route/access-route.module').then( m => m.AccessRouteModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
