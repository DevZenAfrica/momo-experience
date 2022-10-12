import {PartnerDetail} from './partnerDetail';

export class Partner {
  date: string;

  constructor(public id: string, public name: string, public logo: string, public idCountry: string, public idGroupPartner: string, public long: number, public lat: number, public idCategoryPartner: string, public logoPins: string, public subtitle: string, public cover: string, public idFees: string[], public howTo: string[], public content: PartnerDetail, public idFaq: string[], public created_by: string) {
    this.date = new Date().toString();
  }
}
