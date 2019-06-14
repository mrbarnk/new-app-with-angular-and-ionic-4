import { Component, OnInit } from '@angular/core';
// import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { PostPattern } from './news.model';
import { NewsServiceService } from './news-service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  posts: any;

  constructor(
    private news: NewsServiceService,
    private router: Router,
    private http: HttpClient
    // public formBuilder: FormBuilder,
    // private validations_form: Validators,
    // private formControl: FormControl,
    // private formGroup: FormGroup
    ) { }

  ngOnInit() {
    this.news.getAllNews().subscribe(data => {
      this.posts = data['articles'];
    });
    
    
    // this.validations_form = this.formBuilder.group({
    //   name: new FormControl('', Validators.required),
    //   email: new FormControl('', Validators.compose([
    //     Validators.required,
    //     Validators.email
    //   ]))
    // });
  }
  loadThisNews ( article ) {
    this.news.currentArticle = this.news.getThisNews(article);
    // console.table(this.http.get(this.news.currentArticle.url).subscribe(data => {
    //   return data;
    // }));
    // console.log(this.news.currentArticle);
    this.router.navigate(['news-detail']);
  }
  LoadMoreNews () {
    this.news.loadPlusNews();
  }

}
