import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FriendsListComponent } from './components/friends-list/friends-list.component';
import { FriendService } from './friend.service';
import { RouterModule, Routes } from '@angular/router';
import { FriendsFormComponent } from './components/friends-form/friends-form.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', component: FriendsListComponent},
  { path: 'add', component: FriendsFormComponent},
  { path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    FriendsListComponent,
    FriendsFormComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FriendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
