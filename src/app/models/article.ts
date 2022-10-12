export class Article {
  date: string;

  constructor(public id: string, public title: string, public content: string, public status: number, public idOperator: string, public description: string, public logo: string, public miniature: string, public categorie: string, public tags: string[], public link: string, public created_by: string) {
    this.date = new Date().toString();
  }
}
