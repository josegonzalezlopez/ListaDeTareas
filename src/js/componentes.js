
import { Tarea, TodoList} from '../classes';
import { listadoTareas } from '../index.js';

const lista = document.querySelector('.todo-list');
const inputTarea = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');
const ulFiltros = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');


export const agregarTareaHtml = (tarea) => {

    const itenLista = `<li class="${(tarea.completado)?'completed':''}" data-id="${tarea.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${(tarea.completado)?'checked':''}>
            <label>${tarea.tarea}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
        </li>`;

    const div = document.createElement('div');
    div.innerHTML=itenLista;

    lista.append(div.firstElementChild);

    return div.firstElementChild;
}


//Eventos 

//Input de tarea
inputTarea.addEventListener('keyup', (event)=>{
    if(event.keyCode === 13 && inputTarea.value.length > 0){
        const newTodo = new Tarea(inputTarea.value);
        listadoTareas.nuevaTarea(newTodo);
        agregarTareaHtml(newTodo);
        inputTarea.value = '';
    }
});

//Click en item de la lista
lista.addEventListener('click', (event) => {
    const tipoElemento = event.target.localName;
    const todoElemento = event.target.parentElement.parentElement;
    const idTodo = todoElemento.getAttribute('data-id');

    if(tipoElemento.includes('input')){
        listadoTareas.marcarTarea(idTodo);
        todoElemento.classList.toggle('completed');
    }else if (tipoElemento.includes('button')){
        listadoTareas.eliminarTarea(idTodo);
        lista.removeChild(todoElemento);
    }
});

//click en el boton clear-completed
btnBorrar.addEventListener('click', ()=>{

    listadoTareas.eliminarCompletados();

    for (let i = lista.children.length -1; i >= 0; i--){
        const elemento = lista.children[i];
        if (elemento.classList.contains('completed')){
            lista.removeChild(elemento);
        }
    }
});

//click en la Ul filters
ulFiltros.addEventListener('click', (event)=>{
    const filtro = event.target.text;

    if(!filtro) {return;}

    anchorFiltros.forEach((element)=> element.classList.remove('selected'));
     event.target.classList.add('selected');

    for(const elemento of lista.children){
        //hago todas las tareas visibles
        elemento.classList.remove('hidden');

        const completado = elemento.classList.contains('completed');

        switch (filtro) {
            case 'Pendientes':
                if( completado){
                    elemento.classList.add('hidden');
                }
                break;
            case 'Completados':
                if( !completado){
                    elemento.classList.add('hidden');
                }
                break;
        }
    }
});

