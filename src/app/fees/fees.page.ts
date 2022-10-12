import { Component, OnInit } from '@angular/core';
import {FeesService} from "../services/fees.service";
import {GroupFees} from "../models/groupFees";
import {Fees} from "../models/fees";
import {CountryService} from "../services/country.service";
import {ActivatedRoute} from "@angular/router";
import {HowTo} from "../models/howTo";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-fees',
  templateUrl: './fees.page.html',
  styleUrls: ['./fees.page.scss'],
})
export class FeesPage implements OnInit {

  slideOptsGroup = {
    initialSlide: 0,
    speed: 800 ,
    slidesPerView: 0,
    spaceBetween: 10,
    slidesOffsetBefore:10,
    slidesOffsetAfter:10
  };

  slideOptsElt = {
    initialSlide: 0,
    speed: 800 ,
    slidesPerView: 0,
    spaceBetween: 10,
    slidesOffsetBefore:10,
    slidesOffsetAfter:10
  };

  groupeFees: GroupFees[] = [];
  currentGroupFees: GroupFees;
  fees: Fees[] = [];
  currentFees: Fees;
  tabSelect = '';
  groupSelect = '';
  linkj: any;

  constructor(private feesService: FeesService, private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    if(this.route.snapshot.queryParams.group) {
      this.groupSelect = this.route.snapshot.queryParams.group;
      if(this.groupSelect === 'international') { this.updateGroupFees(null, 'international'); }
    }
    this.feesService.getGroupeFees().then(
      (data) => {
        this.groupeFees = data;
        const pointe = this;
        this.groupeFees.forEach(function(doc) {
          if(doc.id === pointe.groupSelect) {
            pointe.updateGroupFees(doc);
          }
        });
      }
    );
  }

  updateFees(fs: Fees) {
    this.currentFees = fs;
  }

  updateGroupFees(gf: GroupFees, otherTabMenu = '') {
    if(gf !== null) {
      this.currentGroupFees = gf;

      if(this.currentGroupFees.content) {
        this.currentGroupFees.content.includes('http://') || this.currentGroupFees.content.includes('https://') ? this.linkj = this.sanitizer.bypassSecurityTrustResourceUrl(this.currentGroupFees.content) : null;
      } else {
        this.currentFees = null;
        this.fees = [];

        this.feesService.getFeesWitchIdGroup(gf.id).then(
          (data) => {
            this.fees = data;
          }
        );
      }
    } else {
      this.currentGroupFees = null;
      this.tabSelect = otherTabMenu;
    }
  }

}
