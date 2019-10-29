import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      // { path: 'mapa', loadChildren: '../../pages/mapa/mapa.module#MapaPageModule' },
      // { path: 'buscar', loadChildren: '../../pages/buscar/buscar.module#BuscarPageModule' },
      // { path: 'avisos', loadChildren: '../../pages/avisos/avisos.module#AvisosPageModule' },
      // { path: 'micuenta', loadChildren: '../../pages/micuenta/micuenta.module#MicuentaPageModule' },
      { path: 'mapa', loadChildren: () => import('./../mapa/mapa.module').then( m => m.MapaPageModule)},
      { path: 'buscar', loadChildren: () => import('./../buscar/buscar.module').then( m => m.BuscarPageModule)},
      { path: 'avisos', loadChildren: () => import('./../avisos/avisos.module').then( m => m.AvisosPageModule)},
      { path: 'micuenta', loadChildren: () => import('./../micuenta/micuenta.module').then( m => m.MicuentaPageModule)},

    ]
  },{
    path: '',
    redirectTo: '/tabs/mapa',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],

  declarations: [TabsPage]
})
export class TabsPageModule {}
