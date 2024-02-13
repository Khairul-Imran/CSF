import { Component } from '@angular/core';
import { NO_TODO, Todo } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Day32-Workshop';

  parentTodoToBeUpdated: Todo = NO_TODO; // This will be updated to be the Todo that needs to be updated.
  indexOfMostRecentTodoToBeUpdated!: number;
  // updateMode: boolean = false;
  todoListInParent: Todo[] = [];

  receiveFormInput(event: Todo): void {
    console.log(event);
    this.todoListInParent = [...this.todoListInParent, event];
    // this.todoListInParent.push(event);
  }

  receiveEditRequest(event: string) {
    console.log("Parent has received the request to edit: " + event);

    const existingTodoIndexInParentList = this.todoListInParent.findIndex(todo => todo.description === event);
    // this.parentTodoToBeUpdated = {...this.todoListInParent[existingTodoIndexInParentList]};
    this.parentTodoToBeUpdated = this.todoListInParent[existingTodoIndexInParentList];
    this.indexOfMostRecentTodoToBeUpdated = existingTodoIndexInParentList;
    // this.updateMode = true;
    // console.log("Parent: edit mode is currently: ", this.updateMode);
  }

  receiveUpdatedTodo(event: Todo) {
    console.log("Inserting updated event: ", event);
    // Inserts the event back in its original index (hopefully), and removes the old (original) todo in its place.
    this.todoListInParent.splice(this.indexOfMostRecentTodoToBeUpdated, 1, event);
  }
}
