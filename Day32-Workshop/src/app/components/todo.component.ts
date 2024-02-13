import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { NO_TODO, Todo } from '../models';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent  implements OnInit, OnChanges{
  
  private fb: FormBuilder = inject(FormBuilder);
  
  todoForm!: FormGroup;

  // Note: better to have a default todo attribute, than to re-create a default form all the time.
  defaultTodo: Todo = NO_TODO;

  // Todo holder, to hold the edited todo from the parent.
  @Input()
  todoHolder: Todo = NO_TODO;
  
  @Output()
  passFormDetails = new Subject<Todo>();
  
  @Output()
  updateTodo = new Subject<Todo>();
  
  updateMode: boolean = false;

  ngOnInit(): void {
    this.updateMode = false; // Initialise as false, incase.
    this.todoForm = this.createTodoForm(this.defaultTodo);
  }

  // When editing.
  ngOnChanges(changes: SimpleChanges): void {
    console.info(">> Here are the changes yet to be made: ", changes);
    // Whatever is inside the [] is the attribute you want to track the changes of.
    this.todoForm = this.createTodoForm(changes['todoHolder'].currentValue); // Occupies the form controls with the todo that you want to update.
    this.updateMode = true; // Entering updateMode
    console.log("Something has changed, the updateMode is now: ", this.updateMode);
  }

  
  private createTodoForm(todo: Todo): FormGroup {
    
    return this.fb.group({
      description: this.fb.control<string>(todo.description, [Validators.required, Validators.minLength(5)]),
      priority: this.fb.control<string>(todo.priority, [Validators.required]),
      dueDate: this.fb.control<string>(todo.dueDate, [Validators.required, this.futureDateValidation()]),
      completed: this.fb.control<boolean>(todo.completed)
    });
  }
  
  // Date Validation.
  futureDateValidation(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const selectedDate: Date = new Date(control.value);
      const currentDate: Date = new Date();
      
      // Check if the selected date is in the future
      if (selectedDate <= currentDate) {
        return { 'futureDate': true }; // Validation failed
      } else {
        return null; // Validation passed
      }
    };
  }
  
  submitForm() {
    // this.updateMode = false; // Not in updateMode
    const todoFromForm: Todo = this.todoForm.value;
    console.log("process form: ", todoFromForm);
  
    // Fires the event.
    this.passFormDetails.next(todoFromForm);
    this.todoForm = this.createTodoForm(this.defaultTodo); // Resets the todoForm.
  }

  editForm() {
    const updatedTodo: Todo = this.todoForm.value;
    this.updateTodo.next(updatedTodo);
    this.todoForm = this.createTodoForm(this.defaultTodo);
    this.updateMode = false;
  }
  

  // *****These methods need to return TRUE for the buttons to be disabled*****
  // Cannot press when in updateMode (== true)
  cannotSubmitTodo() {
    return this.todoForm.invalid || this.updateMode;
  }

  // Cannot press when NOT in updateMode (== false) -> Which equals to true after the '!'.
  cannotEditTodo() {
    return this.todoForm.invalid || !this.updateMode;
  }

  // Think of it like this: 
  // Just ensure that your logic for the buttons are correct (what modes must you be in ?) -> remember, ultimately must return true for it to be disabled,
  // then ensure that you change the mode accordingly in the relevant methods.
}
