import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [TaskComponent],
  exports: [TaskComponent],
  imports: [CommonModule, IonicModule],
})
export class ComponentsModule {}
