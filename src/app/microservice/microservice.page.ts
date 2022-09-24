import { Component, OnInit } from '@angular/core';
import {MicroserviceService} from "../services/microservice.service";
import {MicroService} from "../models/microService";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-microservice',
  templateUrl: './microservice.page.html',
  styleUrls: ['./microservice.page.scss'],
})
export class MicroservicePage implements OnInit {

  microServices: MicroService[] = [];
  groupSelect = '';

  constructor(private microServiceService: MicroserviceService, private msservice: MicroserviceService, private route: ActivatedRoute) { }

  ngOnInit() {
    if(this.route.snapshot.queryParams.group) {
      this.groupSelect = this.route.snapshot.queryParams.group;
    }
    this.microServiceService.getMicroServices().then(
      (data) => {
        this.microServices = data;
      }
    );
  }
}
