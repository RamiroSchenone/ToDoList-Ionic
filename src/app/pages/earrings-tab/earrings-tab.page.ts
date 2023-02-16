import { Component } from '@angular/core';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-earrings-tab',
  templateUrl: 'earrings-tab.page.html',
  styleUrls: ['earrings-tab.page.scss']
})
export class EarringsTabPage {

  constructor(
    public tareasService: TareasService
  ) {}

}
