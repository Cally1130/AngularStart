import { Component, inject, input, output } from '@angular/core';
import { DataAccessService } from '../../../shared/data-access.service';
import { Todo, ToDoAddDto } from '../../../shared/interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  imports: [RouterLink],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {

  todos = input<Todo[]>();
  todoDeleted = output<Todo>();
}
