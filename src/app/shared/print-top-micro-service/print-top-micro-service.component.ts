import { Component, OnInit } from '@angular/core';
import {MicroserviceService} from '../../services/microservice.service';
import {MicroService} from '../../models/microService';

@Component({
  selector: 'app-print-top-micro-service',
  templateUrl: './print-top-micro-service.component.html',
  styleUrls: ['./print-top-micro-service.component.scss'],
})
export class PrintTopMicroServiceComponent implements OnInit {

  microServices: MicroService[] = [];
  slideOpts = {
    initialSlide: 0,
    speed: 800 ,
    slidesPerView: 0,
    spaceBetween: 20,
    slidesOffsetBefore:10,
    slidesOffsetAfter:10
  };

  constructor(private microServiceService: MicroserviceService) { }

  ngOnInit() {
    this.microServiceService.getMicroServices().then(
      (data) => {
        this.microServices = data;
      }
    );
  }

}
