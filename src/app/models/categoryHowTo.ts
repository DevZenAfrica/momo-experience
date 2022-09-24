export class CategoryHowTo {
  date: string;

  constructor(public id: string, public name: string, public illustration: string) {
    this.date = new Date().toString();
  }
}
