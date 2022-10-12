import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PartnerService} from "../services/partner.service";
import {Partner} from "../models/partner";
import {Cashier} from "../models/cashier";
import {CashierService} from "../services/cashier.service";
import {AuthentificationService} from "../services/authentification.service";
import {UserService} from "../services/user.service";
import {User} from "../models/user";

@Component({
  selector: 'app-preview-partner',
  templateUrl: './preview-partner.page.html',
  styleUrls: ['./preview-partner.page.scss'],
})
export class PreviewPartnerPage implements OnInit {

  currentPartner: Partner;
  cashers: Cashier[] = [];
  currentUser: User;

  montane = 0;
  currentCasher: Cashier;

  menuSelect = 1;

  constructor(private partnerService: PartnerService, private activatedRoute: ActivatedRoute, public cashierService: CashierService, private authService: AuthentificationService, private userService: UserService) { }

  ngOnInit() {
    this.partnerService.getPartnerWitchId(this.activatedRoute.snapshot.paramMap.get('id')).then(
      (data) => {
        this.currentPartner = data;
      }
    );

    this.cashierService.getCashierWitchIdPartner(this.activatedRoute.snapshot.paramMap.get('id')).then(
      (data) => {
        if(data.length === 0) { this.menuSelect = 2; }
        this.cashers = data;
      }
    );

    this.authService.isAuthenticated().then(
      (data) => {
        if(data) {
          this.userService.getCurrentUtilisateur().then(
            (data1) => {
              this.currentUser = data1;
            }
          );
        }
      }
    );
  }

  likeCurrentPartner() {
    const tmpCurrentUser = this.currentUser;
    if(tmpCurrentUser.favoritePartner.includes(this.currentPartner.id)) {
      tmpCurrentUser.favoritePartner.splice(tmpCurrentUser.favoritePartner.indexOf(this.currentPartner.id), 1);
    } else {
      tmpCurrentUser.favoritePartner.push(this.currentPartner.id);
    }
    this.userService.updateCurrentUser(this.currentUser).then(
      () => {
        this.currentUser = tmpCurrentUser;
      }
    );
  }

  updateIdentifiant(value: number) {
    if(value) {
      this.currentCasher = this.cashers[value];
    } else { this.currentCasher = null; }
  }

  calculResult(somme: number) {
    this.montane = somme;
  }

}
