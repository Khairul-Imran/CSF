import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';
import { NewsServiceService } from '../../news-service.service';
import { News } from './news';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.css'
})
export class NewsListComponent implements OnInit {
  
  jsonString!: string;
  newsData!: any;
  newsArray: News[] = []; // Important, news array has to be done this way.

  constructor(private newsService: NewsServiceService) {}

  ngOnInit(): void {
    this.newsService.fetchNewsData()
      .then((result: any) => {
        this.jsonString = JSON.stringify(result);
        this.newsData = JSON.parse(this.jsonString);
        console.log(this.newsData.articles);

        this.newsData.articles.forEach((element: any) => {
          const n : News = {
            author: element.author,
            title: element.title,
            description: element.description,
            content: element.content
          }
          this.newsArray.push(n);
        });

      })
      .catch((error: any) => {
        console.log("Promise rejected error: " + JSON.stringify(error));
      })
  }

}
