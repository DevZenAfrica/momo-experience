export class Faq {
  date: string;

  constructor(public id: string, public title: string, public content: string, public status: number, public media: string, public idOperator: string[]) {
    this.date = new Date().toString();
  }
}
