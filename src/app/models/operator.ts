export class Operator {
  date: string;

  constructor(public id: string, public name: string, public logo: string, public status: number, public idGroupeOperator: string, public created_by: string) {
    this.date = new Date().toString();
  }
}
