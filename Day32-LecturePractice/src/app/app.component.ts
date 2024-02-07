import { Component } from '@angular/core';
import { FormArray } from '@angular/forms';
import { Friend } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Day32-LecturePractice';

  friends: Friend[] = [];

  selectedFriend!: Friend;

  addedFriend(friend: Friend) {
    this.friends.push(friend);
  }

  selectFriendToPopulate(i: number) {
    console.info(this.friends[i]);
    this.selectedFriend = this.friends[i];
  }

}
