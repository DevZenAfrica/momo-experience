import {Component, OnInit} from '@angular/core';
import {MicroserviceService} from "../services/microservice.service";
import {MicroService} from "../models/microService";
import {ActivatedRoute} from "@angular/router";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

@Component({
  selector: 'app-preview-service',
  templateUrl: './preview-service.page.html',
  styleUrls: ['./preview-service.page.scss'],
})
export class PreviewServicePage implements OnInit {

  currentService: MicroService;
  menuSelect = -1;

  constructor(private sanitizer: DomSanitizer, private microServiceService: MicroserviceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.microServiceService.getMicroServiceWitchId(this.activatedRoute.snapshot.paramMap.get('id')).then(
      (data) => {
        this.currentService = data;
      }
    );
  }

  transform(url): SafeHtml {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
