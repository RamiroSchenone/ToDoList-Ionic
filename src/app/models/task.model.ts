import { TaskItem } from './task-item.model';

export class Task {
  id: number;
  title: string;
  creationDate: Date;
  endDate: Date;
  statusComplete: boolean;
  tasks: TaskItem[];

  constructor(titulo: string, fechaFin: Date) {
    this.id = new Date().getTime();
    this.title = titulo;
    this.creationDate = new Date();
    this.endDate = fechaFin;
    this.statusComplete = false;
    this.tasks = [];
  }
}
