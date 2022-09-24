import { Component, OnInit } from '@angular/core';
import {FaqService} from '../../services/faq.service';
import {Faq} from '../../models/faq';

@Component({
  selector: 'app-print-faq',
  templateUrl: './print-faq.component.html',
  styleUrls: ['./print-faq.component.scss'],
})
export class PrintFaqComponent implements OnInit {

  faqs: Faq[];

  constructor(private faqService: FaqService) { }

  ngOnInit() {
    this.faqService.getFaq().then(
      (data) => {
        this.faqs = data;
      }
    );
  }

}
