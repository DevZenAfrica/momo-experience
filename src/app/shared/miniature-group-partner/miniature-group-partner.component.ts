import {Component, Input, OnInit} from '@angular/core';
import {GroupPartner} from "../../models/groupPartner";
import {PartnerService} from "../../services/partner.service";

@Component({
  selector: 'app-miniature-group-partner',
  templateUrl: './miniature-group-partner.component.html',
  styleUrls: ['./miniature-group-partner.component.scss'],
})
export class MiniatureGroupPartnerComponent implements OnInit {

  @Input() data: GroupPartner;
  @Input() idGroupPartner: string;
  @Input() skin = 'card';

  displayFees = false;

  constructor(private partnerService: PartnerService) { }

  ngOnInit() {
    if(!this.data) {
      this.partnerService.getGroupPartnerWitchId(this.idGroupPartner).then(
        (data) => {
          this.data = data;
        }
      );
    }
  }

}
