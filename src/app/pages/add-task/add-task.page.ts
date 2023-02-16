import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage implements OnInit {
  constructor(private taskService: TaskService) {
    this.taskService.getTaskListOnLocalStorage();
  }

  ngOnInit() {}
}
