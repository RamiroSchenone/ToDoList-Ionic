import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [TaskComponent],
  exports: [TaskComponent],
  imports: [CommonModule, IonicModule, PipesModule],
})
export class ComponentsModule {}
