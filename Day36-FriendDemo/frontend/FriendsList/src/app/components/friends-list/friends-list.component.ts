import { Component } from '@angular/core';
import { Friend } from '../../models';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrl: './friends-list.component.css'
})
export class FriendsListComponent {

  friendList: Friend[] = [];

  addFriend() {
    
  }

}
