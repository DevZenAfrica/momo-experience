import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {

  slideOpts = {
    initialSlide: 0,
    speed: 800 ,
    slidesPerView: 0,
    spaceBetween: 10,
    slidesOffsetBefore:10,
    slidesOffsetAfter:10
  };
  categorieSelect = '';
  categoriesShop = ['Food', 'Station', 'Divers', 'Education'];

  menuSelect = 1;

  constructor() { }

  ngOnInit() {
  }

  setCategorieSelectGlobal(value) {
    this.categorieSelect = value;
  }

  presentAllCategorie() {
  }
}
