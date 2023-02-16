import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-finished-tab',
  templateUrl: 'finished-tab.page.html',
  styleUrls: ['finished-tab.page.scss']
})
export class FinishedTabPage {

  constructor(
    private taskService: TaskService
  ) {}

}
