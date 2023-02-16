import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinishedTabPage } from './finished-tab.page';

const routes: Routes = [
  {
    path: '',
    component: FinishedTabPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinishedTabPageRoutingModule {}
