import { Injectable } from '@angular/core';
import firebase from 'firebase';
import {GroupMicroService} from '../models/groupMicroService';

@Injectable({
  providedIn: 'root'
})
export class MicroserviceService {

  constructor() { }

  async addGroupMicroService(value: any) {
    return new Promise<void>((resolve, reject) => {
      // @ts-ignore
      firebase.firestore().collection('groupMicroServices').doc(value.id).set(Object.assign({}, value)).then(
        () => {
          resolve();
        }, (error) => {
          reject(error);
        }
      );
    });
  }

  async getGroupMicroServices() {
    return new Promise<GroupMicroService[]>((resolve, reject) => {
      // @ts-ignore
      firebase.firestore().collection('groupMicroServices').onSnapshot(
        (docRef) => {
          const result: GroupMicroService[] = [];
          docRef.forEach(function(doc) {
            if(doc.data().status !== 0) {
              result.push(doc.data() as GroupMicroService);
            }
          });
          resolve(result as any);
        }, (error) => {
          reject(error);
        }
      );
    });
  }
}
