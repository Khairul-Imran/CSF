import { Component } from '@angular/core';
import { NO_TODO, Todo } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Day32-Workshop';

  parentTodoToBeUpdated: Todo = NO_TODO;
  todoListInParent: Todo[] = [];

  receiveFormInput(event: Todo): void {
    console.log(event);
    this.todoListInParent = [...this.todoListInParent, event];
    // this.todoListInParent.push(event);
  }

  receiveEditRequest(event: string) {
    console.log("Parent has received the request to edit: " + event);

    const existingTodoIndexInParentList = this.todoListInParent.findIndex(todo => todo.description === event);
    this.parentTodoToBeUpdated = {...this.todoListInParent[existingTodoIndexInParentList]};
  }
}
