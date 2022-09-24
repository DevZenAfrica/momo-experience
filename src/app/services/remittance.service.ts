import { Injectable } from '@angular/core';
import { Remittance } from '../models/remittance';
import firebase from "firebase";

@Injectable({
  providedIn: 'root'
})
export class RemittanceService {

  constructor() { }

  async add(value: any) {
    return new Promise<void>((resolve, reject) => {
      // @ts-ignore
      firebase.firestore().collection('remittances').doc(value.id).set(Object.assign({}, value)).then(
        () => {
          resolve();
        }, (error) => {
          reject(error);
        }
      );
    });
  }

  async getRemittance() {
    return new Promise<Remittance[]>((resolve, reject) => {
      // @ts-ignore
      firebase.firestore().collection('remittances').where('status','==', 1).onSnapshot(
        (docRef) => {
          const result: Remittance[] = [];
          docRef.forEach(function(doc) {
            result.push(doc.data() as Remittance);
          });
          resolve(result as any);
        }, (error) => {
          reject(error);
        }
      );
    });
  }

  async getRemittanceWitchCountry(idCountry: string) {
    return new Promise<Remittance[]>((resolve, reject) => {
      // @ts-ignore
      firebase.firestore().collection('remittances').where('status','==', 1).where('idCountry', 'array-contains', idCountry).onSnapshot(
        (docRef) => {
          const result: Remittance[] = [];
          docRef.forEach(function(doc) {
            result.push(doc.data() as Remittance);
          });
          resolve(result as any);
        }, (error) => {
          reject(error);
        }
      );
    });
  }
}
