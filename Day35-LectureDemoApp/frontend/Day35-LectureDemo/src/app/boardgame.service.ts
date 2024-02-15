import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';
import { Game } from './models';

@Injectable({
  providedIn: 'root'
})
export class BoardgameService {

  // private http = inject(HttpClient);
  constructor(private http: HttpClient) { }

  // GET http://localhost:8080/api/games/search?name=abc
  searchBoardgame(name: string): Observable<Game[]> {
    const params = new HttpParams()
        .set("name", name)

    return this.http.get<Game[]>('http://localhost:8080/api/games/search', { params })
  }

  searchComments(gameId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`http://localhost:8080/api/game/${gameId}/comments`)
  }

  searchBoardgamePromise(name: string): Promise<Game[]> {
    return lastValueFrom(this.searchBoardgame(name));
  }

  searchCommentsPromise(gameId: number): Promise<Comment[]> {
    return lastValueFrom(this.searchComments(gameId))
  }

}
