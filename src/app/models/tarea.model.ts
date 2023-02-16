import { TareaItem } from "./tarea-item.model";

export class Tarea {
    id: number;
    titulo: string;
    fechaCreacion: Date;
    fechaFin: Date;
    estadoCompletada: boolean;
    tareas: TareaItem[];

    constructor(titulo: string, fechaFin: Date) {
        this.id = new Date().getTime();
        
        this.titulo = titulo;
        this.fechaCreacion = new Date();
        this.fechaFin = fechaFin;
        this.estadoCompletada = false;
        this.tareas = [];
    }
}