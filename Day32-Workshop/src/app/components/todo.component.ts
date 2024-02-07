import { Component, OnInit, Output, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Todo } from '../models';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent  implements OnInit {

  private fb: FormBuilder = inject(FormBuilder);

  todoForm!: FormGroup;

  @Output()
  passFormDetails = new Subject<Todo>();

  ngOnInit(): void {
    this.todoForm = this.createTodoForm();
  }

  processForm() {
    // const todo = this.todoForm.value as Todo;
    const todo: Todo = this.todoForm.value;
    console.log("process form: ", todo);

    // Fires the event.
    this.passFormDetails.next(todo);
    this.todoForm = this.createTodoForm(); // Resets.
  }

  // Custom Validation for Date. Don't understand this syntax. Need to understand lol.
  // futureDateValidation(): ValidatorFn {
  //   return (control: AbstractControl): { [key: string]: any } | null => {
  //     const selectedDate: Date = new Date(control.value);
  //     const currentDate: Date = new Date();
    
  //     // Check if the selected date is in the future
  //     if (selectedDate <= currentDate) {
  //       return { 'futureDate': true }; // Validation failed
  //     } else {
  //       return null; // Validation passed
  //     }
  //   };
  // }

  private createTodoForm(): FormGroup {

    return this.fb.group({
      description: this.fb.control<string>('', [Validators.required, Validators.minLength(5)]),
      priority: this.fb.control<string>('Medium', [Validators.required]),
      dueDate: this.fb.control<string>('', [Validators.required]),
      completed: this.fb.control<boolean>(false)
    })
  }
}
