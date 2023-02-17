import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  taskList: Task[] = [];

  constructor() {}

  editTaskItemList(task: Task, i: number, newDescription: string) {
    var taskItemToEdit = task.items[i];
    taskItemToEdit ? (taskItemToEdit.description = newDescription) : null;
    this.setTaskListOnLocalStorage();
  }

  createTask(title: string) {
    const newTask = new Task(title);
    this.taskList.push(newTask);
    this.setTaskListOnLocalStorage();
    return newTask.id;
  }

  editTask(title: string, id: number) {
    var taskToEdit = this.taskList.find((task) => task.id === id);
    taskToEdit ? (taskToEdit.title = title) : null;
    this.setTaskListOnLocalStorage();
  }

  deleteTask(id: number) {
    this.taskList = this.taskList.filter(task => task.id != id);
    this.setTaskListOnLocalStorage();
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
    localStorage.setItem('tasksList', JSON.stringify(this.taskList));
  }

  getTaskListOnLocalStorage() {
    const storedList = localStorage.getItem('tasksList');
    this.taskList = storedList ? JSON.parse(storedList) : this.taskList;
  }
}
