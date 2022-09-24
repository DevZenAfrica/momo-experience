import {Component, Input, OnInit} from '@angular/core';
import {MicroService} from '../../models/microService';

@Component({
  selector: 'app-miniature-micro-service',
  templateUrl: './miniature-micro-service.component.html',
  styleUrls: ['./miniature-micro-service.component.scss'],
})
export class MiniatureMicroServiceComponent implements OnInit {

  @Input() data: MicroService;
  @Input() skin: string = 'item';

  constructor() { }

  ngOnInit() {}

}
