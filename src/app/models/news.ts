export class News {
  date: string;

  constructor(public id: string, public title: string, public content: string, public status: number, public idOperator: string, public media: string[], public typeMedia: string[]) {
    this.date = new Date().toString();
  }
}
