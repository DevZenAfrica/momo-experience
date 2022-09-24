import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { User } from '../models/user';
import { AlertService } from '../services/alert.service';
import {UserService} from "../services/user.service";
import {AuthentificationService} from "../services/authentification.service";

declare function getMsisdn(): any;
declare function getCountry(): any;
declare const globalUserName: any;
declare const avatarUser: any;

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  isLoading = true;
  user: User = null;

  constructor(private alertService: AlertService, private userService: UserService, private alertController: AlertController, private authService: AuthentificationService) {}

  ngOnInit(): void {
    this.authService.isAuthenticated().then(
      (result) => {
        if(result) {
          this.userService.getCurrentUtilisateur().then(
            (data) => { console.log('oui oui ' + data);
              this.user = data;
              if(this.user.typeInscription === 'ayoba') { this.user.photo = avatarUser; }
              this.isLoading = false;
            }
          );
        } else { this.isLoading = false; }
      }
    );
  }

  lrgoogle() {
    this.isLoading = true;
    this.authService.googleAuth().then(
      () => {
        location.reload();
      },
      (error) => {
        this.isLoading = false;
        this.alertService.print(error);
      }
    );
  }

  async confirmDeconnexion() {
    let txt1; let txt2; let txt3;

    const alert = await this.alertController.create({
      header: 'Disconnection',
      message: 'You are about to disconnect, do you want to continue?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'OK',
          handler: () => {
            this.authService.signOut().then();
            localStorage.clear();
            location.reload();
          }
        }
      ]
    });

    await alert.present();
  }

}
