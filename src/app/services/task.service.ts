import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  taskList: Task[] = [];

  constructor() {
    this.setTaskListOnLocalStorage();
  }

  createTask(title: string) {
    const newTask = new Task(
      title,
      new Date(new Date().setDate(new Date().getDate() + 1))
    );
    this.taskList.push(newTask);
    this.setTaskListOnLocalStorage();
  }

  setTaskListOnLocalStorage() {
    localStorage.setItem('tasksList', JSON.stringify(this.taskList));
  }

  getTaskListOnLocalStorage() {
    const storedList = localStorage.getItem('tasksList');
    this.taskList = storedList ? JSON.parse(storedList) : this.taskList;
  }
}
