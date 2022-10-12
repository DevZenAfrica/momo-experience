import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { GroupPartner } from '../models/groupPartner';
import {Partner} from "../models/partner";
import {CategoryPartner} from "../models/categoryPartner";

@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  constructor() { }

  async addPartner(value: any) {
    return new Promise<void>((resolve, reject) => {
      // @ts-ignore
      firebase.firestore().collection('partner').doc(value.id).set(Object.assign({}, value)).then(
        () => {
          resolve();
        }, (error) => {
          reject(error);
        }
      );
    });
  }

  async addGroupPartner(value: any) {
    return new Promise<void>((resolve, reject) => {
      // @ts-ignore
      firebase.firestore().collection('groupPartner').doc(value.id).set(Object.assign({}, value)).then(
        () => {
          resolve();
        }, (error) => {
          reject(error);
        }
      );
    });
  }

  async addCategoryPartner(value: any) {
    return new Promise<void>((resolve, reject) => {
      // @ts-ignore
      firebase.firestore().collection('categoryPartner').doc(value.id).set(Object.assign({}, value)).then(
        () => {
          resolve();
        }, (error) => {
          reject(error);
        }
      );
    });
  }

  async getCategoryPartner() {
    return new Promise<CategoryPartner[]>((resolve, reject) => {
      // @ts-ignore
      firebase.firestore().collection('categoryPartner').onSnapshot(
        (docRef) => {
          const result: CategoryPartner[] = [];
          docRef.forEach(function(doc) {
            result.push(doc.data() as CategoryPartner);
          });
          resolve(result as any);
        }, (error) => {
          reject(error);
        }
      );
    });
  }

  async getPartner() {
    return new Promise<Partner[]>((resolve, reject) => {
      // @ts-ignore
      firebase.firestore().collection('partner').onSnapshot(
        (docRef) => {
          const result: Partner[] = [];
          docRef.forEach(function(doc) {
            if(doc.data().status !== 0) {
              result.push(doc.data() as Partner);
            }
          });
          resolve(result as any);
        }, (error) => {
          reject(error);
        }
      );
    });
  }

  async getPartnerWitchId(idPartner: string) {
    return new Promise<Partner>((resolve, reject) => {
      firebase.firestore().collection('partner').doc(idPartner).get().then(
        (docRef) => {
          resolve(docRef.data() as Partner);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  async getGroupPartner() {
    return new Promise<GroupPartner[]>((resolve, reject) => {
      // @ts-ignore
      firebase.firestore().collection('groupPartner').onSnapshot(
        (docRef) => {
          const result: GroupPartner[] = [];
          docRef.forEach(function(doc) {
            if(doc.data().status !== 0) {
              result.push(doc.data() as GroupPartner);
            }
          });
          resolve(result as any);
        }, (error) => {
          reject(error);
        }
      );
    });
  }

  async getGroupPartnerWitchId(idGroupPartner: string) {
    return new Promise<GroupPartner>((resolve, reject) => {
      firebase.firestore().collection('groupPartner').doc(idGroupPartner).get().then(
        (docRef) => {
          resolve(docRef.data() as GroupPartner);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  async getPartnerWitchTypePartner(typePartner) {
    return new Promise<Partner[]>((resolve, reject) => {
      // @ts-ignore
      firebase.firestore().collection('partner').where('typePartner', '==', typePartner).onSnapshot(
        (docRef) => {
          const result: Partner[] = [];
          docRef.forEach(function(doc) {
            if(doc.data().status !== 0) {
              result.push(doc.data() as Partner);
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
