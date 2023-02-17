import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../models/task.model';

@Pipe({
  name: 'filterComplete',
})
export class FilterCompletePipe implements PipeTransform {
  transform(tasks: Task[], tasksCompleted: boolean = true): Task[] {
    if (tasksCompleted) {
      return tasks.filter((task) => !task.statusComplete);
    }else{
      return tasks.filter((task) => task.statusComplete);
    }
  }
}
