import { Component, OnInit } from '@angular/core';
import {Country} from '../../models/country';
import {AlertService} from "../../services/alert.service";
import {AlertController} from "@ionic/angular";
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-choose-country',
  templateUrl: './choose-country.component.html',
  styleUrls: ['./choose-country.component.scss'],
})
export class ChooseCountryComponent implements OnInit {

  inputPays: Country[] = [];
  idPaySelect: any;
  paySelect: any;
  isLoading = false;

  constructor(private alertService: AlertService, private alertController: AlertController, private countryService: CountryService) { }

  ngOnInit() {
    this.countryService.getCountryApp().then(
      (data8) => {
        this.inputPays = data8;
      }
    );
  }

  closePopOver() {
    document.getElementById('modalPopOver').classList.add('hidden');
  }

  printPop() {
    document.getElementById('modalPopOver').classList.remove('hidden');
  }

  saveCountry(paysChoice: Country) {
    this.isLoading = true;
    if(this.idPaySelect !== paysChoice.id) {
    }
  }

  async presentAllCountry() {
    const alert = await this.alertController.create({
      header: 'Select country',
      mode: 'ios',
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: (countryChoice: Country) => {

          }
        }
      ],
      inputs: this.inputPays
    });

    await alert.present();
  }

  initializeObjetPays(idPays: string) {
    this.countryService.getCountryWitchId(idPays).then(
      (data) => {
        this.paySelect = data;
      }
    );
  }

}
