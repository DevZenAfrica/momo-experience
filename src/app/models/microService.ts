export class MicroService {
  date: string;

  constructor(public id: string, public title: string, public description: string, public logo: string, public cover: string, public categorie: string, public top: number, public status: number, public idGroupMicroService: string, public menu: string[], public content: string[], public idFees: string, public idHowTo: string[]) {
    this.date = new Date().toString();
  }
}
