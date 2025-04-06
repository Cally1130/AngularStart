import { Component, inject } from '@angular/core';
import { TodoFormComponent } from "./ui/todo-form/todo-form.component";
import { Todo, ToDoAddDto } from '../shared/interface';
import { DataAccessService } from '../shared/data-access.service';
import { TodoListComponent } from "./ui/todo-list/todo-list.component";

@Component({
  selector: 'app-home',
  imports: [TodoFormComponent, TodoListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {
  
  todoService = inject(DataAccessService);
  
  createTodo(todo: ToDoAddDto) {
    this.todoService.addTodo(todo);
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }
}
