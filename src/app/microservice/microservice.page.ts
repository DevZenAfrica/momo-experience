import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PartnerService} from "../services/partner.service";
import {Partner} from "../models/partner";

@Component({
  selector: 'app-microservice',
  templateUrl: './microservice.page.html',
  styleUrls: ['./microservice.page.scss'],
})
export class MicroservicePage implements OnInit {

  partners: Partner[] = [];
  groupSelect = '';

  constructor(private partnerService: PartnerService, private route: ActivatedRoute) { }

  ngOnInit() {
    if(this.route.snapshot.queryParams.group) {
      this.groupSelect = this.route.snapshot.queryParams.group;
    }
    this.partnerService.getPartnerWitchTypePartner('service').then(
      (data) => {
        this.partners = data;
      }
    );
  }
}
