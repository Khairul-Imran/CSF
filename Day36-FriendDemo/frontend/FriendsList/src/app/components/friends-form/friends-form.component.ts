import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Friend } from '../../models';
import { Router } from '@angular/router';
import { FriendService } from '../../friend.service';

@Component({
  selector: 'app-friends-form',
  templateUrl: './friends-form.component.html',
  styleUrl: './friends-form.component.css'
})
export class FriendsFormComponent implements OnInit, OnDestroy {
  
  private fb: FormBuilder = inject(FormBuilder);
  private router = inject(Router);
  private friendService = inject(FriendService);
  friendForm!: FormGroup;



  ngOnInit(): void {
    this.friendForm = this.createFriendForm();
  }
  
  ngOnDestroy(): void {

  }

  private createFriendForm(): FormGroup {
    
    return this.fb.group({
      name: this.fb.control<string>('', [Validators.required, Validators.minLength(3)]),
      email: this.fb.control<string>('', [Validators.email, Validators.required]),
      telephone: this.fb.control<string>('', [Validators.required])
    });
  }

  submitForm() {
    const friendFromForm: Friend = this.friendForm.value;
    console.log("Adding friend: ", friendFromForm);

    this.friendService.addFriend(friendFromForm)
      .then(response => {
        console.info("response: ", response);
        this.router.navigate([ '/' ]);
      })
      .catch(response => {
        alert(`Add Error: ${response.err}`);
      })

    
    this.friendForm = this.createFriendForm(); // reset.
  }


}
