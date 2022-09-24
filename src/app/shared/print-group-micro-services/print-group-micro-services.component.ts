import { Component, OnInit } from '@angular/core';
import {GroupMicroService} from "../../models/groupMicroService";
import {MicroserviceService} from "../../services/microservice.service";
import {AlertController} from "@ionic/angular";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-print-group-micro-services',
  templateUrl: './print-group-micro-services.component.html',
  styleUrls: ['./print-group-micro-services.component.scss'],
})
export class PrintGroupMicroServicesComponent implements OnInit {

  slideOpts = {
    initialSlide: 0,
    speed: 800 ,
    slidesPerView: 0,
    spaceBetween: 10,
    slidesOffsetBefore:10,
    slidesOffsetAfter:10
  };

  categorieSelect = '';
  groupeMS: GroupMicroService[] = [];
  inputListCategorie = [];

  constructor(private msservice: MicroserviceService, private alertController: AlertController, private route: ActivatedRoute) { }

  ngOnInit() {
    if(this.route.snapshot.queryParams.group) {
      this.categorieSelect = this.route.snapshot.queryParams.group;
    }
    this.msservice.getGroupMicroServices().then(
      (data1) => {
        this.groupeMS = data1 as any;

        for(let i=0; i<this.groupeMS.length; i++) {
          this.inputListCategorie.push(
            {
              label: this.groupeMS[i].name,
              type: 'radio',
              value: this.groupeMS[i].id,
              checked: this.categorieSelect === this.groupeMS[i].id
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
            this.setCategorieSelectGlobal(categorieChoice);
          }
        }
      ],
      inputs: this.inputListCategorie,
      animated: true
    });

    await alert.present();
  }
}
