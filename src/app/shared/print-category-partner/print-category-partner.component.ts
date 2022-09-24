import { Component, OnInit } from '@angular/core';
import {PartnerService} from "../../services/partner.service";
import {AlertController} from "@ionic/angular";
import {ActivatedRoute} from "@angular/router";
import {CategoryPartner} from "../../models/categoryPartner";

@Component({
  selector: 'app-print-category-partner',
  templateUrl: './print-category-partner.component.html',
  styleUrls: ['./print-category-partner.component.scss'],
})
export class PrintCategoryPartnerComponent implements OnInit {

  slideOpts = {
    initialSlide: 0,
    speed: 800 ,
    slidesPerView: 0,
    spaceBetween: 10,
    slidesOffsetBefore:10,
    slidesOffsetAfter:10
  };

  categorieSelect = '';
  categoryPartner: CategoryPartner[] = [];
  inputListCategorie = [];

  constructor(private partnerService: PartnerService, private alertController: AlertController, private route: ActivatedRoute) { }

  ngOnInit() {
    if(this.route.snapshot.queryParams.category) {
      this.categorieSelect = this.route.snapshot.queryParams.category;
    }
    this.partnerService.getCategoryPartner().then(
      (data1) => {
        this.categoryPartner = data1 as any;

        for(let i=0; i<this.categoryPartner.length; i++) {
          this.inputListCategorie.push(
            {
              label: this.categoryPartner[i].name,
              type: 'radio',
              value: this.categoryPartner[i].id,
              checked: this.categorieSelect === this.categoryPartner[i].id
            }
          );
        }
      }
    );
  }

  setCategorieSelectGlobal(value) {
    this.categorieSelect = value;
  }

  async presentAllCategorie() {
    const alert = await this.alertController.create({
      header: 'Choose categorie',
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: (categorieChoice) => {
            window.open('tabs/shop?category=' + categorieChoice,'_parent');
          }
        }
      ],
      inputs: this.inputListCategorie,
      animated: true
    });

    await alert.present();
  }

}
