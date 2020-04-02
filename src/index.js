import './style.css';

import { Tarea, TodoList } from './classes';
import { agregarTareaHtml } from './js/componentes';


export const listadoTareas = new TodoList();

//listadoTareas.listadoTareas.forEach( (tarea) => agregarTareaHtml(tarea));
//lo de arriba equivale a esto en el llamado de la funcion
listadoTareas.listadoTareas.forEach(agregarTareaHtml);