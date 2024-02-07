import { Component } from '@angular/core';
import { Todo } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Day32-LectureDemo';

  todos: Todo[] = [];

  receiveForm(receivedTodo: Todo) {
    this.todos.push(receivedTodo);
  }

  // receiveForm(receivedTodo: Todo) {
  //   console.log(receivedTodo);
  // }

  // Try do later.
  // text = "a message";
  // fontSize = 1;

  // disabled = false;

  // keypressed(o: any) {
  //   this.text = o.target.value;
  // }

  // valueChanged(n: any) {
  //   this.fontSize = n.target.value;
  // }

  // disableInput() {
    
  // }
}
