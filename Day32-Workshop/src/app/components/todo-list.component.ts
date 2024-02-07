import { Component, Input } from '@angular/core';
import { Todo } from '../models';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {

  @Input()
  todoList: Todo[] = [];

}
