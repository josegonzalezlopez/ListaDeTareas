
export class Tarea {

    static parseJson({id, tarea, completado, creado}){
        const tareaTemp = new Tarea(tarea);
        
        tareaTemp.id = id;
        tareaTemp.completado = completado;
        tareaTemp.creado = creado;

        return tareaTemp;
    }

    constructor(tarea){
        this.tarea = tarea;
        this.id = new Date().getTime();
        this.completado = false;
        this.creado = new Date();
    }
}