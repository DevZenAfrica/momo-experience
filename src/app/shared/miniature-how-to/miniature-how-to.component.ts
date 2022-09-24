import {Component, Input, OnInit} from '@angular/core';
import {HowTo} from "../../models/howTo";
import {HowToService} from "../../services/how-to.service";

@Component({
  selector: 'app-miniature-how-to',
  templateUrl: './miniature-how-to.component.html',
  styleUrls: ['./miniature-how-to.component.scss'],
})
export class MiniatureHowToComponent implements OnInit {

  @Input() data: HowTo;
  @Input() idHowTo: string;

  constructor(private howToService: HowToService) { }

  ngOnInit() {
    if(this.idHowTo && !this.data) {
      this.howToService.getHowToWitchId(this.idHowTo).then(
        (donnee) => {
          this.data = donnee;
        }
      );
    }
  }

}
