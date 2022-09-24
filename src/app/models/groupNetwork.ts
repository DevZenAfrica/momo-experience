export class GroupNetwork {
  date: string;

  constructor(public id: string, public name: string, public idOperator: string) {
    this.date = new Date().toString();
  }
}
