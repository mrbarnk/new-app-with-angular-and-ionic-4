import { Injectable } from '@angular/core';
import { PostPattern } from './news.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const dataUrl = environment.apiUrl + 'apiKey=' +environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {
  currentArticle: any;
  pageSize: any = 5;
  constructor(
    private http: HttpClient
    ) { }
  getAllNews() {
    // return dataUrl;
    return this.http.get(`${dataUrl}&pageSize=${this.pageSize}`);
  }
  getThisNews(news) {
    if(!news) {
      return;
    }
    return news;
  }
  loadPlusNews() {
    this.pageSize = this.pageSize + 5;

    this.getAllNews();
    alert(this.pageSize);
  }
}
