import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'main-list',
    loadChildren: () => import('./main-list/main-list.module').then( m => m.MainListPageModule)
  },  {
    path: 'tony-pizza',
    loadChildren: () => import('./tony-pizza/tony-pizza.module').then( m => m.TonyPizzaPageModule)
  },
  {
    path: 'details-modal',
    loadChildren: () => import('./details-modal/details-modal.module').then( m => m.DetailsModalPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
