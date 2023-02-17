import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  taskList: Task[] = [];

  constructor() {}

  createTask(title: string) {
    const newTask = new Task(title);
    this.taskList.push(newTask);
    this.setTaskListOnLocalStorage();
    return newTask.id;
  }

  getTask(id: string | number) {
    id = +id;
    this.getTaskListOnLocalStorage();
    const task = this.taskList.find((task) => task.id === id);
    if (task) {
      return task;
    }
    return 'Task list not found';
  }

  setTaskListOnLocalStorage() {
    if (this.taskList.length === 0) {
      this.getTaskListOnLocalStorage();
    }
    localStorage.setItem('tasksList', JSON.stringify(this.taskList));
  }

  getTaskListOnLocalStorage() {
    const storedList = localStorage.getItem('tasksList');
    this.taskList = storedList ? JSON.parse(storedList) : this.taskList;
  }
}
