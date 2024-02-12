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

  // Default.
  // This todo will be changed from outside. Find out where.
  @Input()
  todo: Todo = NO_TODO;
  
  @Output()
  passFormDetails = new Subject<Todo>();
  
  @Output()
  updateTodo = new Subject<Todo>();
  
  updateMode = false;

  ngOnInit(): void {
    this.todoForm = this.createTodoForm(this.todo);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.info(">> Here are the changes: ", changes);
    // Whatever is inside the [] is the attribute you want to track the changes of.
    this.todoForm = this.createTodoForm(changes['todo'].currentValue); 
    this.updateMode = true;
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
    // const todo = this.todoForm.value as Todo;
    const todoFromForm: Todo = this.todoForm.value;
    console.log("process form: ", todoFromForm);
  
    // Fires the event.
    this.passFormDetails.next(todoFromForm);//
    this.todoForm = this.createTodoForm(this.todo); // Resets the todoForm.
  }

  editForm() {
    const updatedTodo: Todo = this.todoForm.value;
    this.updateTodo.next(updatedTodo);
    this.todoForm = this.createTodoForm(this.todo);
    this.updateMode = false;
  }
  
  //
  cannotSubmitTodo() {
    return this.todoForm.invalid || this.updateMode;
  }

  //
  cannotEditTodo() {
    return this.todoForm.invalid || this.updateMode;
  }
  
}
