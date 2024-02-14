import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Post } from './post';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit {
  
  posts: Post[] = [];

  constructor(public postService: PostService) { }
  
  // Important: better to do mapping like how it is shown in the slides.!!
  // He did this in the NEWS example!!!! stringify -> parse into json obj -> then do for each****
  ngOnInit(): void {
    this.postService.getAllPosts().subscribe({
      next: (data: Post[]) => {
        this.posts = data;
      },
      error: (err: any) => {
        console.log(err);
      }
    })


  }


}
