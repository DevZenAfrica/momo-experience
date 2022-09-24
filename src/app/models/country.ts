
export class Country {
  date: string;

  constructor(public id: string, public name: string, public code: number, public flag: string, public isCountryApp: number) {
    this.date = new Date().toString();
  }
}
