import { Component, OnInit } from '@angular/core';
import {NewsService} from "../services/news.service";
import {News} from "../models/news";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-news-overview',
  templateUrl: './news-overview.page.html',
  styleUrls: ['./news-overview.page.scss'],
})
export class NewsOverviewPage implements OnInit {

  currentNews: News;
  slider: any;
  defaultTransform: any;

  constructor(private newsService: NewsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const pointe = this;
    setTimeout(function(){
      pointe.slider = document.getElementById('slider');
    }, 2000);
    this.defaultTransform = 0;
    this.newsService.getNewsWitchId(this.activatedRoute.snapshot.paramMap.get('id')).then(
      (data) => {
        this.currentNews = data;
      }
    );
  }

  goNext() {
    this.defaultTransform = this.defaultTransform - 398;
    if (Math.abs(this.defaultTransform) >= this.slider.scrollWidth / 1.7) {this.defaultTransform = 0;}
    this.slider.style.transform = 'translateX(' + this.defaultTransform + 'px)';
  }

  goPrev() {
    if (Math.abs(this.defaultTransform) === 0) {this.defaultTransform = 0;}
    else {this.defaultTransform = this.defaultTransform + 398;}
    this.slider.style.transform = 'translateX(' + this.defaultTransform + 'px)';
  }

}
