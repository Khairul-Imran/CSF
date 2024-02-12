import { Component, Input, Output } from '@angular/core';
import { Todo } from '../models';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {

  @Input()
  todoList: Todo[] = [];

  @Output()
  onEdit = new Subject<string>();

  // To edit tasks.
  // Send out the task to edit.
  editTodo(taskDescription: string): void {
    console.log("We are editing this task: " + taskDescription);
    this.onEdit.next(taskDescription);
  }

  // To delete the tasks.
  // Send out the task to delete.


}
