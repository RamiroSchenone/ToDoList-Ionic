import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FinishedTabPage } from './finished-tab.page';

import { FinishedTabPageRoutingModule } from './finished-tab-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ComponentsModule,
    FinishedTabPageRoutingModule
  ],
  declarations: [FinishedTabPage]
})
export class FinishedTabPageModule {}
