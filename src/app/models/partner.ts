export class Partner {
  date: string;

  constructor(public id: string, public name: string, public logo: string, public idCountry: string, public idGroupPartner: string, public long: number, public lat: number, public idCategoryPartner: string, public logoPins: string, public description: string) {
    this.date = new Date().toString();
  }
}
