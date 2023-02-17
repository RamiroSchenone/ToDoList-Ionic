import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PendingTabPage } from './pending-tab.page';

import { PendingTabPageRoutingModule } from './pending-tab-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PendingTabPageRoutingModule
  ],
  declarations: [PendingTabPage]
})
export class PendingTabPageModule {}
