export class TaskItem {
    description: string;
    status: boolean;

    constructor(descripcion: string) {
        this.description = descripcion;
        this.status = false;
    }
}