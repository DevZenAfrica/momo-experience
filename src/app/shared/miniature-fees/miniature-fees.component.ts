import {Component, Input, OnInit} from '@angular/core';
import {Fees} from "../../models/fees";
import {FeesService} from "../../services/fees.service";

@Component({
  selector: 'app-miniature-fees',
  templateUrl: './miniature-fees.component.html',
  styleUrls: ['./miniature-fees.component.scss'],
})
export class MiniatureFeesComponent implements OnInit {

  @Input() idFees: string;
  @Input() data: Fees;

  resultat: number = null;
  reduce: number = null;
  taxe: number = null;
  montantRecupInput = 0;

  constructor(private feesService: FeesService) { }

  ngOnInit() {
    if(!this.data && this.idFees) {
      this.feesService.getFeesWitchId(this.idFees).then(
        (donnee) => {
          this.data = donnee;
        }
      );
    }
  }

  detectMin() {
    let value = this.data.min.length > 0 ? this.data.min[0] : 0;
    for(let i=0; i<this.data.min[i]; i++) {
      if(this.data.min[i] < value) {
        value = this.data.min[i];
      }
    }
    return value;
  }

  detectMax() {
    let value = this.data.max.length > 0 ? this.data.max[0] : 0;
    for(let i=0; i<this.data.max[i]; i++) {
      if(this.data.max[i] > value) {
        value = this.data.max[i];
      }
    }
    return value;
  }

  calculResult(montantInput: number) {
    this.montantRecupInput = montantInput;
    if(montantInput !== null)
      for(let i=0; i<this.data.min.length; i++) {
        if(montantInput >= this.data.min[i] && montantInput <= this.data.max[i]) {
          if(this.data.typeCalcul[i] === '%') {
            this.reduce = (montantInput * this.data.montant[i]) / 100;
            this.resultat = montantInput - this.reduce;
          } else if(this.data.typeCalcul[i] === '-') {
            this.resultat = montantInput - this.data.montant[i];
          }
          if(this.data.montantTax > 0) {
            if(this.data.typeCalculTax === '%') {
              this.taxe = (montantInput * this.data.montantTax) / 100;
            } else if(this.data.typeCalculTax === '-') {
              this.taxe = this.data.montantTax;
            }
          }
        }
      }
    else {
      this.resultat = null;
      this.reduce = null;
      this.taxe = null;
    }
  }

}
