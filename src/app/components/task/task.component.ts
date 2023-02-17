import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  constructor(
    public taskService: TaskService,
    private router: Router,
    private alertController: AlertController
  ) {}

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

  async editTaskName(i: number) {
    var taskToEdit = this.taskService.taskList[i];
    const alert = await this.alertController.create({
      header: 'Edit Title',
      inputs: [
        {
          name: 'title',
          type: 'text',
          value: taskToEdit.title,
          placeholder: 'Title',
        },
      ],
      buttons: [
        {
          text: 'EDIT',
          handler: (data) => {
            if (data.title.length === 0) {
              return;
            }
            this.taskService.editTask(data.title, +taskToEdit.id);
          },
        },
        {
          text: 'CANCEL',
          role: 'cancel',
          handler: (data) => {},
        },
      ],
    });
    await alert.present();
  }
  
}
