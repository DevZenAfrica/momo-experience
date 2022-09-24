import { Injectable } from '@angular/core';
import firebase from 'firebase';
import {HowTo} from '../models/howTo';

@Injectable({
  providedIn: 'root'
})
export class HowToService {

  constructor() { }

  async add(value: any) {
    return new Promise<void>((resolve, reject) => {
      // @ts-ignore
      firebase.firestore().collection('howTo').doc(value.id).set(Object.assign({}, value)).then(
        () => {
          resolve();
        }, (error) => {
          reject(error);
        }
      );
    });
  }

  async getHowTo() {
    return new Promise<HowTo[]>((resolve, reject) => {
      // @ts-ignore
      firebase.firestore().collection('howTo').orderBy('date', 'desc').onSnapshot(
        (docRef) => {
          const result: HowTo[] = [];
          docRef.forEach(function(doc) {
            if(doc.data().status !== 0) {
              result.push(doc.data() as HowTo);
            }
          });
          resolve(result as any);
        }, (error) => {
          reject(error);
        }
      );
    });
  }

  async getHowToWitchId(id: string) {
    return new Promise<HowTo>((resolve, reject) => {
      firebase.firestore().collection('howTo').doc(id).get().then(
        (docRef) => {
          resolve(docRef.data() as HowTo);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
}
