import { Component, computed, inject } from '@angular/core';
import { DataAccessService } from '../shared/data-access.service';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-detail',
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export default class DetailComponent {

  private route = inject(ActivatedRoute);
  private todoService = inject(DataAccessService);

  private paramMap = toSignal(this.route.paramMap);

  currentTodo = computed(() => 
    this.todoService
        .todos()
        .find(todo => todo.id === this.paramMap()?.get('id'))
  );
  

}
