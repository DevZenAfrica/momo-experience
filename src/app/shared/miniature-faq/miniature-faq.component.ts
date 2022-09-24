import {Component, Input, OnInit} from '@angular/core';
import {Faq} from '../../models/faq';

@Component({
  selector: 'app-miniature-faq',
  templateUrl: './miniature-faq.component.html',
  styleUrls: ['./miniature-faq.component.scss'],
})
export class MiniatureFaqComponent implements OnInit {

  @Input() data;

  faq: Faq;
  isToggle;

  constructor() { }

  ngOnInit() {
    this.faq = this.data as Faq;
  }

}
