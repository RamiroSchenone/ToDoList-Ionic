import { TaskItem } from './task-item.model';

export class Task {
  id: number;
  title: string;
  creationDate: Date;
  endDate?: Date;
  statusComplete: boolean;
  items: TaskItem[];

  constructor(titulo: string) {
    this.id = new Date().getTime();
    this.title = titulo;
    this.creationDate = new Date();
    this.statusComplete = false;
    this.items = [];
  }
}
