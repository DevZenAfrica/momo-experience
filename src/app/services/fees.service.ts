import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { Fees } from '../models/fees';
import {GroupFees} from '../models/groupFees';

@Injectable({
  providedIn: 'root'
})
export class FeesService {

  async addFees(value: any) {
    return new Promise<void>((resolve, reject) => {
      // @ts-ignore
      firebase.firestore().collection('fees').doc(value.id).set(Object.assign({}, value)).then(
        () => {
          resolve();
        }, (error) => {
          reject(error);
        }
      );
    });
  }
  async addGroupeFees(value: any) {
    return new Promise<void>((resolve, reject) => {
      // @ts-ignore
      firebase.firestore().collection('groupFees').doc(value.id).set(Object.assign({}, value)).then(
        () => {
          resolve();
        }, (error) => {
          reject(error);
        }
      );
    });
  }


  async getFees() {
    return new Promise<Fees[]>((resolve, reject) => {
      // @ts-ignore
      firebase.firestore().collection('fees').onSnapshot(
        (docRef) => {
          const result: Fees[] = [];
          docRef.forEach(function(doc) {
            if(doc.data().status !== 0) {
              result.push(doc.data() as Fees);
            }
          });
          resolve(result as any);
        }, (error) => {
          reject(error);
        }
      );
    });
  }

  async getFeesWitchIdGroup(idGroupe: string) {
    return new Promise<Fees[]>((resolve, reject) => {
      // @ts-ignore
      firebase.firestore().collection('fees').where('idGroupFees', '==', idGroupe).onSnapshot(
        (docRef) => {
          const result: Fees[] = [];
          docRef.forEach(function(doc) {
            if(doc.data().status !== 0) {
              result.push(doc.data() as Fees);
            }
          });
          resolve(result as any);
        }, (error) => {
          reject(error);
        }
      );
    });
  }

  async getGroupeFees() {
    return new Promise<GroupFees[]>((resolve, reject) => {
      // @ts-ignore
      firebase.firestore().collection('groupFees').onSnapshot(
        (docRef) => {
          const result: GroupFees[] = [];
          docRef.forEach(function(doc) {
            if(doc.data().status !== 0) {
              result.push(doc.data() as GroupFees);
            }
          });
          resolve(result as any);
        }, (error) => {
          reject(error);
        }
      );
    });
  }

  async getFeesWitchId(idFees: string) {
    return new Promise<Fees>((resolve, reject) => {
      firebase.firestore().collection('fees').doc(idFees).get().then(
        (docRef) => {
          resolve(docRef.data() as Fees);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  async getGroupFeesWitchId(idFaq: string) {
    return new Promise<GroupFees>((resolve, reject) => {
      firebase.firestore().collection('groupFees').doc(idFaq).get().then(
        (docRef) => {
          resolve(docRef.data() as GroupFees);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
}
