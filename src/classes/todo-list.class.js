import { Tarea } from "./todo.class";

export class TodoList{

    constructor(){
        this.getLocalStorage();
    }

    nuevaTarea(todo){
        this.listadoTareas.push(todo);
        this.setLocalStorage();
    }

    eliminarTarea(id){
        this.listadoTareas = this.listadoTareas.filter( tarea => tarea.id != id);
        this.setLocalStorage();
    }

    marcarTarea(id){
        for (const tarea of this.listadoTareas) {
            if(tarea.id == id){
                tarea.completado = !tarea.completado;
                
                break;
            }
        }
        this.setLocalStorage();
    }

    eliminarCompletados(){
        this.listadoTareas = this.listadoTareas.filter(tarea => !tarea.completado);
        this.setLocalStorage();
    }

    setLocalStorage(){
        localStorage.setItem('tarea', JSON.stringify(this.listadoTareas));
    }

    getLocalStorage(){
        if(localStorage.getItem('tarea')){
            this.listadoTareas = JSON.parse( localStorage.getItem('tarea') );
            // this.listadoTareas = this.listadoTareas.map((tarea)=>Tarea.parseJson(tarea));
            // simplicficamos la funcion de callback
            this.listadoTareas = this.listadoTareas.map(Tarea.parseJson);
        }else{
            this.listadoTareas = [];
        }
    }
}