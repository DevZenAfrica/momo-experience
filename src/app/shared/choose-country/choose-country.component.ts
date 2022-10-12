import { Component, OnInit } from '@angular/core';
import {Country} from '../../models/country';
import {AlertService} from "../../services/alert.service";
import {AlertController} from "@ionic/angular";
import { CountryService } from 'src/app/services/country.service';
import {AuthentificationService} from '../../services/authentification.service';
import {UserService} from '../../services/user.service';
import {User} from "../../models/user";
import {GroupMicroService} from "../../models/groupMicroService";

@Component({
  selector: 'app-choose-country',
  templateUrl: './choose-country.component.html',
  styleUrls: ['./choose-country.component.scss'],
})
export class ChooseCountryComponent implements OnInit {

  inputPays: Country[] = [];
  idPaySelect: any;
  currentUser: User;
  isLoading = false;
  paySelect: Country;

  constructor(private alertService: AlertService, private alertController: AlertController, private countryService: CountryService, private authService: AuthentificationService, private userService: UserService) { }

  ngOnInit() {
    this.countryService.getCountryApp().then(
      (data8) => {
        this.inputPays = data8;

        this.idPaySelect = 'CM';
        this.chooseCountryLocal('CM');

        this.authService.isAuthenticated().then(
          (dec) => {
            if(dec) {
              this.userService.getCurrentUtilisateur().then(
                (data) => {
                  this.currentUser = data;
                  if(data.idCountry) {
                    this.idPaySelect = data.idCountry;
                    this.chooseCountryLocal(this.idPaySelect);
                  }
                }
              );
            }
          }
        );
      }
    );
  }

  chooseCountryLocal(idPays) {
    const pointe = this;
    this.inputPays.forEach(function(pays) {
      if(pays.id === idPays) {
        pointe.paySelect = pays;
      }
    });
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
      const tmpUser = this.currentUser;
      tmpUser.idCountry = paysChoice.id;
      this.userService.updateCurrentUser(tmpUser).then(
        () => {
          this.paySelect = paysChoice;
          this.idPaySelect = paysChoice.id;
          this.isLoading = false;
        }
      );
    }
  }
}
