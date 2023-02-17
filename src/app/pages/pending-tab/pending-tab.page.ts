import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-pending-tab',
  templateUrl: 'pending-tab.page.html',
  styleUrls: ['pending-tab.page.scss'],
})
export class PendingTabPage {
  constructor(
    private router: Router,
    private alertController: AlertController,
    public taskService: TaskService
  ) {
    this.taskService.getTaskListOnLocalStorage();
  }

  async onAddTaskClick() {
    const alert = await this.alertController.create({
      header: 'Title of yout to-do list',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'Title',
        },
      ],
      buttons: [
        {
          text: 'ADD',
          handler: (data) => {
            console.log(data);
            if (data.title.length === 0) {
              return;
            }
            const newTaskId = this.taskService.createTask(data.title);
            this.router.navigate([`tabs/pending-tab/add-task/${newTaskId}`]);
          },
        },
        {
          text: 'CANCEL',
          role: 'cancel',
          handler: (data) => {
            console.log('Cancelar');
          },
        },
      ],
    });
    await alert.present();
  }
}
