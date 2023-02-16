import { Component } from '@angular/core';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-finished-tab',
  templateUrl: 'finished-tab.page.html',
  styleUrls: ['finished-tab.page.scss']
})
export class FinishedTabPage {

  constructor(
    private tareasService: TareasService
  ) {}

}
