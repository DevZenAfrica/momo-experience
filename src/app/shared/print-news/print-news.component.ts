import { Component, OnInit } from '@angular/core';
import {NewsService} from "../../services/news.service";
import {News} from "../../models/news";

@Component({
  selector: 'app-print-news',
  templateUrl: './print-news.component.html',
  styleUrls: ['./print-news.component.scss'],
})
export class PrintNewsComponent implements OnInit {

  slideOptsNews = {
    initialSlide: 0,
    speed: 800 ,
    slidesPerView: 1.1,
    spaceBetween: 10,
    slidesOffsetBefore:10,
    slidesOffsetAfter:10,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pager: true,
    scrollbar: true,
    autoplay:true
  };

  allNews: News[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getNews().then(
      (data) => {
        this.allNews = data;
      }
    );
  }

}
