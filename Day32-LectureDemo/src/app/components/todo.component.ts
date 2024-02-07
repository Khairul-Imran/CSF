import { Component, OnInit, Output, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from '../models';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {

  // Dependency Injection
  // Don't want to allow everyone to access it -> private.
  // constructor(private fb: FormBuilder){
  // 
  // }

  // Newer way to do.
  private fb: FormBuilder = inject(FormBuilder);

  todoForm!: FormGroup;

  // Better to create separately, as you want to individually access.
  taskArray!: FormArray;

  // Form model.
  ngOnInit(): void {
    this.todoForm = this.createTodoForm();
  }

  // Event
  @Output()
  passFormDetails = new Subject<Todo>();

  processForm() {
    const todo = this.todoForm.value as Todo;
    // const todo: Todo = this.todoForm.value
    console.log("process form", todo);
    
    this.passFormDetails.next(todo);
    // Clears the form
    // this.todoForm.reset(); -> can't use reset if you have an array. It resets everything in the form, but doesn't reset the structure of the form (the tasts we added)
    this.todoForm = this.createTodoForm();
  }

  addTask() {
    this.taskArray.push(this.createTaskForm());
  }

  deleteTask(i : number) {
    this.taskArray.removeAt(i);
  }

  private createTaskForm(): FormGroup {
    return this.fb.group({
      task: this.fb.control<string>('', [Validators.required, Validators.minLength(3)]),
      priority: this.fb.control<number>(1),
      completed: this.fb.control<boolean>(false)
    })
  }

  isTodoInvalid(): boolean {
    return this.todoForm.invalid || this.taskArray.length <= 0;
  }

  private createTodoForm(): FormGroup {
    this.taskArray = this.fb.array([]);
    // this.taskArray = this.fb.array([], [Validators.required, Validators.minLength(1)]); -> this works. He is just showing how to create a custom validation.
    // Passing it an object {}
    return this.fb.group({
      // Keys will be the names of the controls.
      title: this.fb.control<string>('', [Validators.required, Validators.minLength(3)]),
      email: this.fb.control<string>('', [Validators.required, Validators.email]),
      completedBy: this.fb.control<string>('', [Validators.required]),
      comments: this.fb.control<string>(''),
      tasks: this.taskArray
    })
  }
}
