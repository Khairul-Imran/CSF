import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Friend, NO_FRIEND } from '../models';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrl: './friend.component.css'
})
export class FriendComponent implements OnInit, OnChanges {

  private fb: FormBuilder = inject(FormBuilder);
  
  friendForm!: FormGroup;
  
  // Form model.
  ngOnInit(): void {
    this.friendForm = this.createFriendForm();
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['existingFriend']?.currentValue) {
      this.friendForm?.patchValue(this.existingFriend);
    }
  }

  @Input()
  existingFriend: Friend = NO_FRIEND;
  
  // Event
  @Output()
  passFormDetails = new Subject<Friend>();
  
  processForm() {
    const friend = this.friendForm.value as Friend;
    console.log("process form", friend);
    
    this.passFormDetails.next(friend);
    // Clears the form
    this.friendForm = this.createFriendForm();
  }
  
  isFriendInvalid(): boolean {
    return this.friendForm.invalid;
  }

  updateFriend(friend: Friend): void {

  }

  private createFriendForm(): FormGroup {
    // Passing it an object {}
    return this.fb.group({
      // Keys will be the names of the controls.
      name: this.fb.control<string>(NO_FRIEND.name, [Validators.required, Validators.minLength(3)]),
      email: this.fb.control<string>(NO_FRIEND.email, [Validators.required, Validators.email]),
      phone: this.fb.control<string>(NO_FRIEND.phone, [Validators.required, Validators.minLength(8)]),
      dob: this.fb.control<string>(NO_FRIEND.dob, [Validators.required]),
      isFriend: this.fb.control<boolean>(false)
    })
  }

}
