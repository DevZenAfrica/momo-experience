import { Component, OnInit } from '@angular/core';
import {FeesService} from "../../services/fees.service";
import {GroupFees} from "../../models/groupFees";

@Component({
  selector: 'app-print-some-fees',
  templateUrl: './print-some-fees.component.html',
  styleUrls: ['./print-some-fees.component.scss'],
})
export class PrintSomeFeesComponent implements OnInit {

  groupeFees: GroupFees[] = [];

  constructor(private feesService: FeesService) { }

  ngOnInit() {
    this.feesService.getGroupeFees().then(
      (data) => {
        this.groupeFees = data;
      }
    );
  }

}
