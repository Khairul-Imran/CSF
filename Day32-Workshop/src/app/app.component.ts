import { Component } from '@angular/core';
import { Todo } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Day32-Workshop';

  todoListInParent: Todo[] = [];

  receiveFormInput(event: Todo): void {
    console.log(event);
    this.todoListInParent.push(event);
  }
}
