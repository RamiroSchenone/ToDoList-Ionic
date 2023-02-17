import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, IonInput } from '@ionic/angular';
import { TaskItem } from 'src/app/models/task-item.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage implements OnInit {
  task: any;
  taskItemName: string = '';

  @ViewChild('ionInputNewTask') ionInputNewTask?: IonInput;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private alertController: AlertController
  ) {
    const taskId = this.route.snapshot.paramMap.get('taskId');
    if (taskId) {
      this.task = this.taskService.getTask(taskId);
    }
  }

  ngOnInit() {}

  addTaskItem() {
    if (this.taskItemName.length === 0) {
      return;
    }
    const newTaskItem = new TaskItem(this.taskItemName);
    this.task.items.push(newTaskItem);
    this.taskService.setTaskListOnLocalStorage();
    if (this.ionInputNewTask) {
      this.ionInputNewTask.value = '';
    }
  }

  checkChange(item: TaskItem) {
    const pending = this.task.items.filter((item: any) => !item.status).length;
    if (pending === 0) {
      this.task.statusComplete = true;
      this.task.endDate = new Date();
    } else {
      this.task.statusComplete = false;
      this.task.endDate = null;
    }
    this.taskService.setTaskListOnLocalStorage();
    console.log(this.taskService.taskList);
  }

  deleteItemList(i: number) {
    this.task.items.splice(i, 1);
    this.taskService.setTaskListOnLocalStorage();
  }

  async editItemListName(i: number) {
    var taskItemToEdit = this.task.items[i];
    const alert = await this.alertController.create({
      header: 'Edit Description',
      inputs: [
        {
          name: 'description',
          type: 'text',
          value: taskItemToEdit.description,
          placeholder: 'Description',
        },
      ],
      buttons: [
        {
          text: 'EDIT',
          handler: (data) => {
            if (data.description.length === 0) {
              return;
            }
            this.taskService.editTaskItemList(this.task, i, data.description);
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
