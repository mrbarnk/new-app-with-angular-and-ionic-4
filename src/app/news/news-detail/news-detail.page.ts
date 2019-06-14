import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from '../news-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.page.html',
  styleUrls: ['./news-detail.page.scss'],
})
export class NewsDetailPage implements OnInit {
  post: any;
  constructor(
    private news: NewsServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    if(!(this.news.currentArticle)) {
      this.router.navigate(['/']);
      return;
    }
    
    this.post = this.news.currentArticle;
  }
  // loadPlusNews () {
  //   this.news.loadPlusNews();
  // }

}
