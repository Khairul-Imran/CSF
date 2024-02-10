import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NO_FRIEND } from '../models';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrl: './friend.component.css'
})
export class FriendComponent implements OnInit {
  
  private fb: FormBuilder = inject(FormBuilder);
  
  friendForm!: FormGroup;
  
  ngOnInit(): void {
    this.friendForm = this.createFriendForm();
  }

  submit(form: any) {
    alert(JSON.stringify(form.value));
  }

  private createFriendForm(): FormGroup {
    // Passing it an object {}
    return this.fb.group({
      // Keys will be the names of the controls.
      name: this.fb.control<string>('', [Validators.required, Validators.minLength(3)]),
      email: this.fb.control<string>('', [Validators.required, Validators.email]),
      address: this.fb.control<string>('', [Validators.required]),
      // phone: this.fb.control<string>('', [Validators.required, Validators.minLength(8)]),
      dob: this.fb.control<string>('', [Validators.required]),
      // isFriend: this.fb.control<boolean>(false)
    })
  }

}
