export class Cashier {
  date: string;

  constructor(public id: string, public idPartner: string, public name: string, public code: string, public status: number, public notes: string, public media: string) {
    this.date = new Date().toString();
  }
}
