export class Operator {
  date: string;

  constructor(public id: string, public name: string, public logo: string, public status: number, public idGroupeOperator: string) {
    this.date = new Date().toString();
  }
}
