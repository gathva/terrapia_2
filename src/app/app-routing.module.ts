import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    // { path: '', redirectTo: 'tabs', pathMatch: 'full' },
  //  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  // { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  {path: '', loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
