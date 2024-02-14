import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './components/post-list/post';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseURL: string = "http://localhost:3000/posts"

  // Similar to slide 22 (day 34)
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // Way shown in slides. Used in delete method, and get postbyid. Use the slides way.
  httpOptions2: any = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) {}

  getPostById(id: number): Observable<Post> {
    return this.httpClient.get<Post>(this.baseURL + `/${id}`, {headers: this.httpOptions2});
  }

  getAllPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.baseURL).pipe(catchError(this.errorHandler));
  }

  createPost(post: Post): Observable<Post> {
    return this.httpClient.post<Post>(this.baseURL, post, this.httpOptions);
  }

  editPost(id: number, post: Post): Observable<Post> {
    return this.httpClient.put<Post>(this.baseURL + `/${id}`, post, this.httpOptions);
  }

  // Slide 27
  deletePost(id: number) : Observable<Post> {
    return this.httpClient.delete<Post>(this.baseURL + `/${id}`, {headers: this.httpOptions2});
  }

  // Example of a Custom error message at the service layer.
  errorHandler(error: any) {
    let errorMessage: any = '';

    if (error.error instanceof ErrorEvent) {
      errorMessage = error.errorMessage;
    } else {
      errorMessage = `Error code: ${error.status}`;
    }

    return throwError(() => new Error(errorMessage));
  }

}
