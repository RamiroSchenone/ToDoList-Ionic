import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Tarea } from '../models/tarea.model';

@Injectable({
  providedIn: 'root',
})
export class TareasService {
  listaTareas: Tarea[] = [];

  constructor() {
    console.log('servicio ok');
    const lista1 = new Tarea(
      'Cocinar arroz y milanesas',
      new Date(new Date().setDate(new Date().getDate() + 1))
    );
    const lista2 = new Tarea(
      'Cocinar una pizza',
      new Date(new Date().setDate(new Date().getDate() + 1))
    );
    this.listaTareas.push(lista1, lista2);
    console.log(this.listaTareas);
  }
}
