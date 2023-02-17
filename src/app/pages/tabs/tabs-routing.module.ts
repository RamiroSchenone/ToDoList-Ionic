import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'pending-tab',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pending-tab/pending-tab.module').then(
                (m) => m.PendingTabPageModule
              ),
          },
          {
            path: 'add-task/:taskId',
            loadChildren: () =>
              import('../add-task/add-task.module').then(
                (m) => m.AddTaskPageModule
              ),
          },
        ],
      },
      {
        path: 'finished-tab',
        loadChildren: () =>
          import('../finished-tab/finished-tab.module').then(
            (m) => m.FinishedTabPageModule
          ),
      },
      {
        path: '',
        redirectTo: '/tabs/pending-tab',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/pending-tab',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
