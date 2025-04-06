import { Component, inject, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Todo, ToDoAddDto } from '../../../shared/interface';

@Component({
  selector: 'app-todo-form',
  imports: [ReactiveFormsModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.scss'
})
export class TodoFormComponent {
  private fb = inject(FormBuilder);

  todoSubmitted = output<ToDoAddDto>();

  todoForm = this.fb.nonNullable.group({
    title: ['', Validators.required],
    description: [''],
  })
}
