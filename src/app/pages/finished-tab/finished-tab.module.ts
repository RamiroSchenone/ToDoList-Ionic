import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FinishedTabPage } from './finished-tab.page';

import { FinishedTabPageRoutingModule } from './finished-tab-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    FinishedTabPageRoutingModule
  ],
  declarations: [FinishedTabPage]
})
export class FinishedTabPageModule {}
