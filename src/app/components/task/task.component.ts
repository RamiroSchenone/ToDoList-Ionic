import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  constructor(public taskService: TaskService, private router: Router) {}

  @Input() pendingPage = true;

  ngOnInit() {}

  editTask(task: any) {
    const newTaskId = +task.id;

    if (this.pendingPage) {
      this.router.navigate([`tabs/pending-tab/add-task/${newTaskId}`]);
    } else {
      this.router.navigate([`tabs/finished-tab/add-task/${newTaskId}`]);
    }
  }

  deleteTask(i: number) {
    this.taskService.taskList.splice(i, 1);
    this.taskService.setTaskListOnLocalStorage();
  }
}
