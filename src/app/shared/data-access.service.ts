import { Injectable, signal } from '@angular/core';
import { Todo, ToDoAddDto } from './interface';

@Injectable({
  providedIn: 'root'
})
export class DataAccessService {

  // We only want this class to be able to
  // update the signal (# makes it private)
  #todos = signal<Todo[]>([]);

  // This can be read publicly
  todos = this.#todos.asReadonly();

  addTodo(todo: ToDoAddDto) {
    this.#todos.update((todos) => [...todos, { ...todo, id: Date.now().toString() }]);
  }

  deleteTodo(todo: Todo) {
    this.#todos.update((todos) => {
      let i = todos.findIndex(t => t.id === todo.id) 
      
      if(i !== -1) {
        todos.splice(i,1);
      }
      return todos;
    })
  }

  constructor() { }
}
