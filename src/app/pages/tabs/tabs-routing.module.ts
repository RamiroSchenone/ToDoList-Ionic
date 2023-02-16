import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'earrings-tab',
        loadChildren: () => import('../earrings-tab/earrings-tab.module').then(m => m.EarringsTabPageModule)
      },
      {
        path: 'finished-tab',
        loadChildren: () => import('../finished-tab/finished-tab.module').then(m => m.FinishedTabPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/earrings-tab',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/earrings-tab',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
