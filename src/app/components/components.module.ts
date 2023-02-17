import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [TaskComponent],
  exports: [TaskComponent],
  imports: [CommonModule],
})
export class ComponentsModule {}
