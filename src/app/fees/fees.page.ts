import { Component, OnInit } from '@angular/core';
import {FeesService} from "../services/fees.service";
import {GroupFees} from "../models/groupFees";
import {Fees} from "../models/fees";
import {CountryService} from "../services/country.service";

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

  constructor(private feesService: FeesService) { }

  ngOnInit() {
    this.feesService.getGroupeFees().then(
      (data) => {
        this.groupeFees = data;
      }
    );
  }

  updateFees(fs: Fees) {
    this.currentFees = fs;
  }

  updateGroupFees(gf: GroupFees, otherTabMenu = '') {
    if(gf !== null) {
      this.currentGroupFees = gf;
      this.currentFees = null;
      this.fees = [];

      this.feesService.getFeesWitchIdGroup(gf.id).then(
        (data) => {
          this.fees = data;
        }
      );
    } else {
      this.currentGroupFees = null;
      this.tabSelect = otherTabMenu;
    }
  }

}
