import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-earrings-tab',
  templateUrl: 'earrings-tab.page.html',
  styleUrls: ['earrings-tab.page.scss'],
})
export class EarringsTabPage {
  constructor(
    private router: Router,
    private alertController: AlertController,
    public taskService: TaskService
  ) {
    this.taskService.getTaskListOnLocalStorage();
  }

  async onAddTaskClick() {
    // this.router.navigate(['tabs/earrings-tab/add-task']);
    const alert = await this.alertController.create({
      header: 'Enter the title of your task',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'Title',
        },
      ],
      buttons: [
        {
          text: 'Add',
          handler: (data) => {
            console.log(data);
            if (data.title.length === 0){
              return;
            }
            this.taskService.createTask(data.title);
          },
        },
        {
          text: 'Cancel',
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
