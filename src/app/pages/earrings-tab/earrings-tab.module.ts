import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EarringsTabPage } from './earrings-tab.page';

import { EarringsTabPageRoutingModule } from './earrings-tab-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    EarringsTabPageRoutingModule
  ],
  declarations: [EarringsTabPage]
})
export class EarringsTabPageModule {}
