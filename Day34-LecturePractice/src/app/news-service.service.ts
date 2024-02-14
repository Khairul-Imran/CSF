import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  apiKey: string = "52a01aee26124c3e9982c21eaa365fc3";

  baseURL: string = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=";

  constructor(private httpClient: HttpClient) { }

  public fetchNewsData(): Promise<any> {
    // return this.httpClient.get(this.baseURL + this.apiKey).toPromise(); // Deprecated.
    // Doing this way is different from what the slides showed, slides used lastValueFrom from rxjs -> see slides.
    return lastValueFrom(this.httpClient.get(this.baseURL + this.apiKey)); 

    // Normally we won't use promise, just use observable. Just need to know how to use promises
  }
}
