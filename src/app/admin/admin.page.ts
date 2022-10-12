import { Component, OnInit } from '@angular/core';
import {ArticleService} from "../services/article.service";
import {CashierService} from "../services/cashier.service";
import {MicroserviceService} from "../services/microservice.service";
import {ActionSheetController} from "@ionic/angular";
import {RemittanceService} from "../services/remittance.service";
import {PollService} from "../services/poll.service";
import {PartnerService} from "../services/partner.service";
import {OperatorService} from "../services/operator.service";
import {CountryService} from "../services/country.service";
import {FeesService} from "../services/fees.service";
import {Article} from "../models/article";
import {Country} from "../models/country";
import {Fees} from "../models/fees";
import {GroupFees} from "../models/groupFees";
import {GroupOperator} from "../models/groupOperator";
import {Operator} from "../models/operator";
import {CategoryPartner} from "../models/categoryPartner";
import {Partner} from "../models/partner";
import {GroupPartner} from "../models/groupPartner";
import {Cashier} from "../models/cashier";
import {Poll} from "../models/poll";
import {Remittance} from "../models/remittance";
import {AlertService} from "../services/alert.service";
import {FormBuilder} from "@angular/forms";
import {ApiService} from "../services/api.service";
import {ToolsService} from '../services/tools.service';
import {DomSanitizer} from "@angular/platform-browser";
import {PartnerDetail} from "../models/partnerDetail";
import {Faq} from "../models/faq";
import {FaqService} from "../services/faq.service";


@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  autorised = false;
  tache = '';

  isLoading = false;

  currentpays: Country;
  currentGroupeOperator: GroupOperator;
  currentOperator: Operator;
  currentGroupeFees: GroupFees;
  currentFees: Fees;
  currentSondages: Poll;
  currentArticle: Article;
  currentCategoryPartner: CategoryPartner;
  currentGroupePartner: GroupPartner;
  currentPartner: Partner;
  currentCaisses: Cashier;
  currentRemittance: Remittance;
  currentFaq: Faq;

  categoriePartner: CategoryPartner[] = [];
  pays: Country[] = [];
  groupeOperator: GroupOperator[] = [];
  operator: Operator[] = [];
  groupeFees: GroupFees[] = [];
  fees: Fees[] = [];
  sondages: Poll[] = [];
  article: Article[] = [];
  categoryPartner: CategoryPartner[] = [];
  groupePartner: GroupPartner[] = [];
  partner: Partner[] = [];
  caisses: Cashier[] = [];
  remittance: Remittance[] = [];
  faq: Faq[] = [];
  tmpTache = '';

  lienGenerer = '';
  imgFile: string | undefined;
  uploadForm = this.formBuilder.group({
    file: [''],
  });
  isLoadingUploadImage = false;
  listOldLink = '';

  currentEmailUser = '';
  cuve1: any[] = [];
  cuve2 = [];
  cuve3 = [];
  cuve4 = [];


  constructor(private faqService: FaqService, private sanitizer: DomSanitizer, private apiService: ApiService, private alertService: AlertService, private formBuilder: FormBuilder, private articleService: ArticleService, private cashierSevice: CashierService, private microServices: MicroserviceService, private actionSheetController: ActionSheetController, private remittanceService: RemittanceService, private pollService: PollService, private partnerService: PartnerService, private operatorService: OperatorService, private countryService: CountryService, private feesService: FeesService) { }

  ngOnInit() {
    this.listOldLink = localStorage.getItem('oldLinkGenered');
    this.autorised = true;
    /*if(Number(prompt('acces code')) === 2806) {
      this.autorised = true;
    } else {
      alert('access denied');
    }*/

    this.faqService.getFaq().then(
      (data) => {
        this.faq = data;
      }
    );

    this.remittanceService.getRemittance().then(
      (data) => {
        this.remittance = data;
      }
    );
    this.cashierSevice.getCashier().then(
      (data) => {
        this.caisses = data;
      }
    );
    this.partnerService.getGroupPartner().then(
      (data) => {
        this.groupePartner = data;
      }
    );
    this.partnerService.getPartner().then(
      (data) => {
        this.partner = data;
      }
    );
    this.articleService.getAllArticles().then(
      (data) => {
        this.article = data;
      }
    );
    this.pollService.getPolls().then(
      (data) => {
        this.sondages = data;
      }
    );
    this.feesService.getFees().then(
      (data) => {
        this.fees = data;
      }
    );
    this.feesService.getGroupeFees().then(
      (data) => {
        this.groupeFees = data;
      }
    );
    this.operatorService.getGroupOperator().then(
      (data) => {
        this.groupeOperator = data;
      }
    );
    this.operatorService.getOperator().then(
      (data) => {
        this.operator = data;
      }
    );
    this.countryService.getCountry().then(
      (data) => {
        this.pays = data;
      }
    );
    this.partnerService.getCategoryPartner().then(
      (data) => {
        this.categoriePartner = data;
      }
    );
  }

  onImageChange(e: any) {
    const reader = new FileReader();

    if (e.target.files && e.target.files.length) {
      const [file] = e.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.imgFile = reader.result as string;
        this.uploadForm.patchValue({
          //imgSrc: reader.result
        });
      };
    }
  }

  selectAction(id: string) {
    console.log(id);
  }

  log() { console.log(1); }

  uploadImage() {
    this.isLoadingUploadImage = true;
    const gid = new ToolsService();
    this.apiService.addImageForAdresseId( gid.generateId(23).toString() , 'images/', this.imgFile ? this.sanitizer.bypassSecurityTrustResourceUrl(this.imgFile).toString() : '').then(
      (docRef: string) => {
        this.lienGenerer = this.imgFile ? docRef : '';
        if(this.listOldLink) { this.listOldLink += this.lienGenerer + ';'; } else { this.listOldLink = this.lienGenerer + ';'; }
        localStorage.setItem('oldLinkGenered', this.listOldLink );
        this.isLoadingUploadImage = false;
      }, () => {
        this.isLoadingUploadImage = false;
        alert('Une erreur est survenue lors de l\'opération, veillez reesayer');
      });
  }

  cleanOldLink() {
    localStorage.removeItem('oldLinkGenered');
    this.listOldLink = '';
    this.lienGenerer = '';
  }

  copieClipboard(val: string) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

  changeOperation(value: any) {
    this.tache = value;
  }

  addArticle(form: any) {
    this.isLoading = true;
    this.articleService.add(new Article(form.value.id, form.value.titre, form.value.content ? form.value.content: '', form.value.status, form.value.idOperator, form.value.description ? form.value.description : '', form.value.logo, form.value.miniatureArticle, form.value.categorie, form.value.tags ? form.value.tags.split(';') : [], form.value.link ? form.value.link : '', this.currentEmailUser)).then(
      () => {
        this.isLoading = false;
        this.alertService.print('Ajouter avec succes');
      }
    );
  }

  addFaq(form: any) {
    this.isLoading = true;
    this.faqService.add(new Faq(form.value.id, form.value.title, form.value.content, Number(form.value.status) as number, this.currentEmailUser)).then(
      () => {
        this.isLoading = false;
        this.alertService.print('Ajouter avec succes');
      }
    );
  }

  addCountry(form: any) {
    this.isLoading = true;
    this.countryService.add(new Country(form.value.id, form.value.name, Number(form.value.code) as number, form.value.flag, Number(form.value.isCountryApp), this.currentEmailUser)).then(
      () => {
        this.isLoading = false;
        this.alertService.print('Ajouter avec succes');
      }
    );
  }

  addFees(form: any) {
    this.isLoading = true;
    const tmpMin: number[] = [];
    const tmpMax: number[] = [];
    const tmpMontants: number[] = [];
    if(form.value.min) { for(let i=0; i<form.value.min.split(';').length; i++) { tmpMin.push(Number(form.value.min.split(';')[i])); } }
    if(form.value.max) { for(let i=0; i<form.value.max.split(';').length; i++) { tmpMax.push(Number(form.value.max.split(';')[i])); } }
    if(form.value.montant) { for(let i=0; i<form.value.montant.split(';').length; i++) { tmpMontants.push(Number(form.value.montant.split(';')[i])); } }

    this.feesService.addFees(new Fees(form.value.id, form.value.idOperator, form.value.name, form.value.status, tmpMin, tmpMax, form.value.seuilmin ? Number(form.value.seuilmin) : 0, form.value.seuilmax ? Number(form.value.seuilmax) : 0, form.value.typeCalcul ? form.value.typeCalcul.split(';') : [], tmpMontants, form.value.countrySend ? form.value.countrySend : '', form.value.countryReceive, form.value.titreTax ? form.value.titreTax : '', form.value.montantTax ? Number(form.value.montantTax) : 0, form.value.typeCalculTax ? form.value.typeCalculTax : '', form.value.idGroupFees, form.value.content ? form.value.content : '', form.value.devise, form.value.dateUpdate ? form.value.dateUpdate.toString() : '', this.currentEmailUser)).then(
      () => {
        this.isLoading = false;
        this.alertService.print('Ajouter avec succes');
      }
    );
  }

  addGroupeFees(form: any) {
    this.isLoading = true;
    this.feesService.addGroupeFees(new GroupFees(form.value.id, form.value.idOperator, form.value.name, form.value.illustration, form.value.content ? form.value.content : '', this.currentEmailUser)).then(
      () => {
        this.isLoading = false;
        this.alertService.print('Ajouter avec succes');
      }
    );
  }

  addGroupeOperator(form: any) {
    this.isLoading = true;
    this.operatorService.addGroupOperator(new GroupOperator(form.value.id, form.value.name, this.currentEmailUser)).then(
      () => {
        this.isLoading = false;
        this.alertService.print('Ajouter avec succes');
      }
    );
  }

  addOperator(form: any) {
    this.isLoading = true;
    this.operatorService.addOperator(new Operator(form.value.id, form.value.name, form.value.logo, form.value.status, form.value.groupOperator, this.currentEmailUser)).then(
      () => {
        this.isLoading = false;
        this.alertService.print('Ajouter avec succes');
      }
    );
  }

  addCategoryPartner(form: any) {
    this.isLoading = true;
    this.partnerService.addCategoryPartner(new CategoryPartner(form.value.id, form.value.name, form.value.illustration, form.value.typeCategorie, this.currentEmailUser)).then(
      () => {
        this.isLoading = false;
        this.alertService.print('Ajouter avec succes');
      }
    );
  }

  addPartner(form: any) { console.log(form.value.guy);
    /*this.isLoading = true;
    this.partnerService.addPartner(new Partner(form.value.id, form.value.name, form.value.logo, form.value.idCountry, form.value.idGroupPartner, form.value.long ? Number(form.value.long) : 0, form.value.lat ? Number(form.value.lat) : 0, form.value.idCategoryPartner, form.value.logoPins ? form.value.logoPins : '', form.value.subtitle ? form.value.subtitle : '', form.value.cover ? form.value.cover : '', form.value.idFees ? form.value.idFees : '', form.value.howTo, Object.assign({}, Object.assign({}, (new PartnerDetail(form.value.contacts.split(';'), form.value.adresse ? form.value.adresse : '', form.value.horaire ? form.value.horaire : '', form.value.services ? form.value.services : '', form.value.otherInfos ? form.value.otherInfos : '')))), form.value.idFaq, this.currentEmailUser)).then(
      () => {
        this.isLoading = false;
        this.alertService.print('Ajouter avec succes');
      }
    );*/
  }

  addGroupePartner(form: any) {
    this.isLoading = true;
    this.partnerService.addGroupPartner(new GroupPartner(form.value.id, form.value.name, form.value.logo, [form.value.channel1 ? form.value.channel1 : '', form.value.channel2 ? form.value.channel2 : '', form.value.channel3 ? form.value.channel3 : ''], form.value.idFees ? form.value.idFees : '', form.value.idOperator, this.currentEmailUser)).then(
      () => {
        this.isLoading = false;
        this.alertService.print('Ajouter avec succes');
      }
    );
  }

  addCashier(form: any) {
    this.isLoading = true;
    this.cashierSevice.add(new Cashier(form.value.id, form.value.idPartner, form.value.name, form.value.code, Number(form.value.status), form.value.notes ? form.value.notes : '', form.value.media ? form.value.media : '', this.currentEmailUser)).then(
      () => {
        this.isLoading = false;
        this.alertService.print('Ajouter avec succes');
      }
    );
  }

  addPoll(form: any) {
    this.isLoading = true;
    this.pollService.addNewpoll(new Poll(form.value.id, form.value.title, [form.value.rep1 ? form.value.rep1.toString() : '', form.value.rep2 ? form.value.rep2.toString() : '', form.value.rep3 ? form.value.rep3.toString() : '', form.value.rep4 ? form.value.rep4.toString() : '', form.value.rep5 ? form.value.rep5.toString() : ''], Number(form.value.top), form.value.photo ? form.value.photo : '', Number(form.value.status), form.value.idOperator, this.currentEmailUser)).then(
      () => {
        this.isLoading = false;
        this.alertService.print('Ajouter avec succes');
      }
    );
  }

  addRemittance(form: any) {
    this.isLoading = true;
    this.remittanceService.add(new Remittance(form.value.id, form.value.idCountry, Number(form.value.status), form.value.idFees ? form.value.idFees : '', form.value.idGroupPartner, this.currentEmailUser)).then(
      () => {
        this.isLoading = false;
        this.alertService.print('Ajouter avec succes');
      }
    );
  }

  deleteObjet() {
    console.log(this.tache);
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Mode Debug X-Experience',
      cssClass: 'my-custom-class',
      buttons: [{
        /*text: 'Ajouter pays',
        role: 'destructive',
        handler: () => {
          this.addCountry();
        } }, {*/
        /*text: 'Ajouter groupe fees',
        data: 10,
        handler: () => {
          this.addGroupeFees();
        } }, {*/
        /*text: 'Ajouter fees',
        data: 10,
        handler: () => {
          this.addFees();
        } }, {*/
        /*text: 'Ajouter sondage',
        data: 10,
        handler: () => {
          this.addPoll();
        } }, {*/
        /*text: 'Ajouter article',
        data: 10,
        handler: () => {
          this.addArticle();
        } }, {*/
        /*text: 'Ajouter groupe operateur',
        data: 10,
        handler: () => {
          this.addGroupeOperator();
        } }, {*/
        /*text: 'Ajouter operateur',
        data: 10,
        handler: () => {
          this.addOperator();
        } }, {*/
        /*text: 'Ajouter category partner',
        data: 10,
        handler: () => {
          this.addCategoryPartner();
        } }, {*/
        /*text: 'Ajouter groupe partner',
        data: 10,
        handler: () => {
          this.addGroupePartner();
        } }, {*/
        /*text: 'Ajouter partner',
        data: 10,
        handler: () => {
          this.addPartner();
        } }, {*/
        /*text: 'Ajouter caisse',
        data: 10,
        handler: () => {
          this.addCashier();
        } }, {*/
        /*text: 'Ajouter remittance',
        data: 10,
        handler: () => {
          this.addRemittance();
        }*/
      }]
    });
    await actionSheet.present();
  }

}
