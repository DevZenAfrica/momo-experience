import { Component, OnInit } from '@angular/core';
import {PartnerService} from "../../services/partner.service";
import {Partner} from "../../models/partner";
import {AuthentificationService} from "../../services/authentification.service";
import {UserService} from "../../services/user.service";
import {User} from "../../models/user";

@Component({
  selector: 'app-preferred-partners',
  templateUrl: './preferred-partners.page.html',
  styleUrls: ['./preferred-partners.page.scss'],
})
export class PreferredPartnersPage implements OnInit {

  partner: Partner[] = [];
  currentUser: User;

  constructor(private partnerService: PartnerService, private authService: AuthentificationService, private userService: UserService) { }

  ngOnInit() {
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

}
