import {Component, Input, OnInit} from '@angular/core';
import {News} from '../../models/news';

@Component({
  selector: 'app-miniature-news',
  templateUrl: './miniature-news.component.html',
  styleUrls: ['./miniature-news.component.scss'],
})
export class MiniatureNewsComponent implements OnInit {

  @Input() idNews;
  @Input() data: News;

  constructor() { }

  ngOnInit() {
  }

}

