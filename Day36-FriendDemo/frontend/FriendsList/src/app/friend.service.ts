import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Friend } from './models';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  // constructor() { }
  private http = inject(HttpClient);

  // All http requests are observables!!
  // Converting from an obs to promise -> he is doing this as an example. Can stick to obs too.
  addFriend(friend: Friend): Promise<any> {
    return lastValueFrom(this.http.post<any>("http://localhost:8080/friend", friend));
  }

  getFriends(): Promise<Friend[]> {
    return lastValueFrom(this.http.get<any>("http://localhost:8080/friends")); // Not done
  }


}
