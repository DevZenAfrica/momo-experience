import {ToolsService} from '../services/tools.service';

export class User {
  photo = '';
  date: string;
  id: string;
  idCountry: string;
  language: string;
  favoritePartner: string[];

  constructor(public userName: string, public phone: string, public email: string, public status: number, public role: string, public typeInscription: string) {
    const gid = new ToolsService();
    this.id = gid.generateId(23);
    this.date = new Date().toString();
    this.idCountry = '';
    this.favoritePartner = [];
    this.language = '';
  }
}
