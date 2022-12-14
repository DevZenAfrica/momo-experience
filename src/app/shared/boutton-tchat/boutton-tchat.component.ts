import { Component, OnInit } from '@angular/core';
import {CountryService} from '../../services/country.service';
import {Country} from '../../models/country';
import {FeesService} from '../../services/fees.service';
import {Fees} from '../../models/fees';
import {GroupFees} from '../../models/groupFees';
import {OperatorService} from '../../services/operator.service';
import {GroupOperator} from '../../models/groupOperator';
import {Operator} from '../../models/operator';
import {PartnerService} from '../../services/partner.service';
import {Partner} from '../../models/partner';
import {GroupPartner} from '../../models/groupPartner';
import {PollService} from '../../services/poll.service';
import {RemittanceService} from '../../services/remittance.service';
import {Remittance} from '../../models/remittance';
import {ActionSheetController} from '@ionic/angular';
import {MicroserviceService} from '../../services/microservice.service';
import {GroupMicroService} from '../../models/groupMicroService';
import {Poll} from '../../models/poll';
import {CategoryPartner} from '../../models/categoryPartner';
import {CashierService} from '../../services/cashier.service';
import {Cashier} from '../../models/cashier';
import {HowToService} from '../../services/how-to.service';
import {HowTo} from '../../models/howTo';
import {Article} from '../../models/article';
import {ArticleService} from '../../services/article.service';

@Component({
  selector: 'app-boutton-tchat',
  templateUrl: './boutton-tchat.component.html',
  styleUrls: ['./boutton-tchat.component.scss'],
})
export class BouttonTchatComponent implements OnInit {

  constructor(private articleService: ArticleService, private howToService: HowToService, private cashierSevice: CashierService, private microServices: MicroserviceService, private actionSheetController: ActionSheetController, private remittanceService: RemittanceService, private pollService: PollService, private partnerService: PartnerService, private operatorService: OperatorService, private countryService: CountryService, private feesService: FeesService) { }

  ngOnInit() {
  }

  addArticle() {
    this.articleService.add(new Article(prompt('id'), prompt('titre'), prompt('content'), 1, prompt('id operator'), prompt('description'), prompt('logo'), prompt('miniature image'), prompt('categorie'), [prompt('tags (vous pouvez separer par ;')], prompt('link')));
  }

  addHowTo() {
    this.howToService.add(new HowTo(prompt('id'), prompt('titre'), prompt('content'), 1, prompt('id operator'), [prompt('media')], [prompt('type media')], prompt('miniature')));
  }

  addCountry() {
    this.countryService.add(new Country(prompt('id'), prompt('name'), Number(prompt('code')) as number, prompt('flag'), Number(prompt('est un pays de app ? (0|1)'))));
  }

  addFees() {
    this.feesService.addFees(new Fees(prompt('id'), prompt('id operator'), prompt('name'), 1, [Number(prompt('min'))], [Number(prompt('max'))], Number(prompt('seuil min')), Number(prompt('seuil max')), [prompt('type calcul')], [Number(prompt('montant'))], prompt('id country send'), [prompt('id country receive')], prompt('titre tax'), Number(prompt('montant tax')), prompt('Type calcul tax'), prompt('id groupe fees'), prompt('Content (si a du contenu, sera uniquement affich??)'), prompt('devise')));
  }

  addGroupeFees() {
    this.feesService.addGroupeFees(new GroupFees(prompt('id'), prompt('id operator'), prompt('name'), prompt('illustration'), prompt('content')));
  }

  addGroupeOperator() {
    this.operatorService.addGroupOperator(new GroupOperator(prompt('id'), prompt('name')));
  }

  addOperator() {
    this.operatorService.addOperator(new Operator(prompt('id'), prompt('name'), prompt('logo'), 1, prompt('group Operator')));
  }

  addGroupMS() {
    this.microServices.addGroupMicroService(new GroupMicroService(prompt('id'), prompt('name'), prompt('description'),  prompt('illustration'), 1, prompt('id operator')));
  }

  addCategoryPartner() {
    this.partnerService.addCategoryPartner(new CategoryPartner(prompt('id'), prompt('name'), prompt('illustration'), prompt('type categorie')));
  }

  addPartner() {
    this.partnerService.addPartner(new Partner(prompt('id'), prompt('name'), prompt('logo'), prompt('id country'), prompt('id group partner'), Number(prompt('longitude')), Number(prompt('latitude')), prompt('id category partner'), prompt('logo pins location'), prompt('description'), prompt('cover'), prompt('menu (separe par ; pour plusieurs)').split(';'), prompt('content (separe par ; pour plusieurs)').split(';'), prompt('services disponibles (separe par ; pour plusieurs)').split(';')));
  }

  addGroupePartner() {
    this.partnerService.addGroupPartner(new GroupPartner(prompt('id'), prompt('name'), prompt('logo'), prompt('channels (separe par ; pour plusieurs)').split(';'), prompt('id fees'), prompt('id operator')));
  }

  addCashier() {
    this.cashierSevice.add(new Cashier(prompt('id'), prompt('id partner'), prompt('name'), prompt('code'), 1, prompt('notes'), prompt('medias (separe par ; pour plusieurs)')));
  }

  addPoll() {
    this.pollService.addNewpoll(new Poll(prompt('Titre')));
  }

  addRemittance() {
    this.remittanceService.add(new Remittance(prompt('id'), prompt('id country (separe par ; pour plusieurs)').split(';'), 1, prompt('id fees'), prompt('id group partner')));
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Mode Debug X-Experience',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Ajouter pays',
        role: 'destructive',
        handler: () => {
          this.addCountry();
        } }, {
        text: 'Ajouter groupe fees',
        data: 10,
        handler: () => {
          this.addGroupeFees();
        } }, {
        text: 'Ajouter fees',
        data: 10,
        handler: () => {
          this.addFees();
        } }, {
        text: 'Ajouter sondage',
        data: 10,
        handler: () => {
          this.addPoll();
        } }, {
        text: 'Ajouter article',
        data: 10,
        handler: () => {
          this.addArticle();
        } }, {
        text: 'Ajouter how to',
        data: 10,
        handler: () => {
          this.addHowTo();
        } }, {
        text: 'Ajouter groupe micro service',
        data: 10,
        handler: () => {
          this.addGroupMS();
        } }, {
        text: 'Ajouter groupe operateur',
        data: 10,
        handler: () => {
          this.addGroupeOperator();
        } }, {
        text: 'Ajouter operateur',
        data: 10,
        handler: () => {
          this.addOperator();
        } }, {
        text: 'Ajouter category partner',
        data: 10,
        handler: () => {
          this.addCategoryPartner();
        } }, {
        text: 'Ajouter groupe partner',
        data: 10,
        handler: () => {
          this.addGroupePartner();
        } }, {
        text: 'Ajouter partner',
        data: 10,
        handler: () => {
          this.addPartner();
        } }, {
        text: 'Ajouter caisse',
        data: 10,
        handler: () => {
          this.addCashier();
        } }, {
        text: 'Ajouter remittance',
        data: 10,
        handler: () => {
          this.addRemittance();
        }
      }]
    });
    await actionSheet.present();
  }

}
