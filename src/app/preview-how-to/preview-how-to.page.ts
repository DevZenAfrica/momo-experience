import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HowToService} from "../services/how-to.service";
import {HowTo} from "../models/howTo";

@Component({
  selector: 'app-preview-how-to',
  templateUrl: './preview-how-to.page.html',
  styleUrls: ['./preview-how-to.page.scss'],
})
export class PreviewHowToPage implements OnInit {

  currentHowTo: HowTo;
  slider: any;
  defaultTransform: any;

  constructor(private howToService: HowToService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const pointe = this;
    setTimeout(function(){
      pointe.slider = document.getElementById('slider');
    }, 2000);
    this.defaultTransform = 0;
    this.howToService.getHowToWitchId(this.activatedRoute.snapshot.paramMap.get('id')).then(
      (data) => {
        this.currentHowTo = data;
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
