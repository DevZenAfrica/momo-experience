import { Component, OnInit } from '@angular/core';
import {HowTo} from '../../models/howTo';
import {HowToService} from '../../services/how-to.service';

@Component({
  selector: 'app-print-how-to',
  templateUrl: './print-how-to.component.html',
  styleUrls: ['./print-how-to.component.scss'],
})
export class PrintHowToComponent implements OnInit {

  slideOpts = {
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

  allHowTo: HowTo[] = [];

  constructor(private howToService: HowToService) { }

  ngOnInit() {
    this.howToService.getHowTo().then(
      (data) => {
        this.allHowTo = data;
      }
    );
  }

}
