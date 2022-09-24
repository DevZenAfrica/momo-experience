export class GroupFees {
  date: string;

  constructor(public id: string, public idOperator: string, public name: string, public illustration: string) {
    this.date = new Date().toString();
  }
}
