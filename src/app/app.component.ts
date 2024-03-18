import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TareasService } from './services/tareas.service';

@Component({
  selector: 'app-root',
  standalone: true, //Se comporta como un micro-modulo
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  listaTareas: string[] = []; //Variable para guardar la lista de tareas
  nuevaTarea: string = ''; //Varibale para adicionar la nueva tarea

  private _tareasService = inject(TareasService); //Traer el servicio donde se almacenan las funciones

  ngOnInit(): void {
      this.listaTareas = this._tareasService.getTareas(); //Obtener todas las tareas
  }

  //Función para agregar tarea
  agregarTarea(){
    this._tareasService.agregarTarea(this.nuevaTarea); //Agregar la tarea al local storage
    this.nuevaTarea = ''; //Regresar la tarea a vacio
    this.listaTareas = this._tareasService.getTareas();
  }

  //Función para eliminar tarea
  eliminarTarea(index: number) {
    this._tareasService.eliminarTarea(index); //Eliminar la tarea
    this.listaTareas = this._tareasService.getTareas(); //Obtener nuevamente la información de las tareas
  }
}
