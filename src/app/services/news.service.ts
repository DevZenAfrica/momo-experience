import { Injectable } from '@angular/core';
import { News } from '../models/news';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() { }

  async add(value: any) {
    return new Promise<void>((resolve, reject) => {
      // @ts-ignore
      firebase.firestore().collection('news').doc(value.id).set(Object.assign({}, value)).then(
        () => {
          resolve();
        }, (error) => {
          reject(error);
        }
      );
    });
  }

  async getNews() {
    return new Promise<News[]>((resolve, reject) => {
      // @ts-ignore
      firebase.firestore().collection('news').orderBy('date', 'desc').onSnapshot(
        (docRef) => {
          const result: News[] = [];
          docRef.forEach(function(doc) {
            if(doc.data().status !== 0) {
              result.push(doc.data() as News);
            }
          });
          resolve(result as any);
        }, (error) => {
          reject(error);
        }
      );
    });
  }

  async getNewsWitchId(idNews: string) {
    return new Promise<News>((resolve, reject) => {
      firebase.firestore().collection('news').doc(idNews).get().then(
        (docRef) => {
          resolve(docRef.data() as News);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
}
