import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  constructor() { }

  //Para guardar los componentes en el local storage
  private localStorageKey = 'listaTareas';

  //Función para obtener las tareas
  getTareas(): string[]{
    return JSON.parse(localStorage.getItem(this.localStorageKey) as string) || []; //Obtener el formato JSON del local storage
  }

  //Función para agregar las tareas
  agregarTarea(tarea: string){
    const tareas = this.getTareas(); //Obtener las tareas guardadas
    tareas.push(tarea);
    localStorage.setItem(this.localStorageKey, JSON.stringify(tareas)); //Agregar la tarea al local storage
  }

  //Función para eliminar tarea
  eliminarTarea(index: number){
    const tareas = this.getTareas(); //Obtener las tareas del local storage
    tareas.splice(index, 1); //Sacar la tarea que se indica en el indice
    localStorage.setItem(this.localStorageKey, JSON.stringify(tareas)); //De las tareas que queden se vuelven a guardar en el local storage
  }
}
