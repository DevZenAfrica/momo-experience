import { Component, OnInit } from '@angular/core';
import {CountryService} from "../../services/country.service";
import {Country} from "../../models/country";
import {AlertController} from "@ionic/angular";
import {RemittanceService} from "../../services/remittance.service";
import {Remittance} from "../../models/remittance";

@Component({
  selector: 'app-international-fees',
  templateUrl: './international-fees.component.html',
  styleUrls: ['./international-fees.component.scss'],
})
export class InternationalFeesComponent implements OnInit {

  countryRecept: Country[] = [];
  countryReceptSelect: Country;
  inputListeCountryRecept = [];
  slideOptsGroup = {
    initialSlide: 0,
    speed: 800 ,
    slidesPerView: 0,
    spaceBetween: 10,
    slidesOffsetBefore:10,
    slidesOffsetAfter:10
  };
  remittances: Remittance[] = [];

  constructor(private countryService: CountryService, private alertController: AlertController, private remittanceService: RemittanceService) { }

  ngOnInit() {
    this.countryService.getCountry().then(
      (data) => {
        this.countryRecept = data;
        for(let i=0; i<this.countryRecept.length; i++) {
          this.inputListeCountryRecept.push(
            {
              label: this.countryRecept[i].name,
              type: 'radio',
              value: this.countryRecept[i].id,
              checked: this.countryReceptSelect === this.countryRecept[i]
            }
          );
        }
      }
    );
  }

  chooseCountryRecept(country: Country) {
    this.countryReceptSelect = country;
    this.remittanceService.getRemittanceWitchCountry(country.id).then(
      (data) => {
        this.remittances = data;
      }
    );
  }

  async presentAllCategorie() {
    const alert = await this.alertController.create({
      header: 'Choose categorie',
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: (countryChoice) => {
            this.countryReceptSelect = countryChoice;
          }
        }
      ],
      inputs: this.inputListeCountryRecept,
      animated: true
    });

    await alert.present();
  }

}
