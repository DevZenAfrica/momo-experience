import { Injectable } from '@angular/core';
import firebase from "firebase";
import {MicroService} from "../models/microService";
import {GroupMicroService} from "../models/groupMicroService";

@Injectable({
  providedIn: 'root'
})
export class MicroserviceService {

  constructor() { }

  async addMicroService(value: any) {
    return new Promise<void>((resolve, reject) => {
      // @ts-ignore
      firebase.firestore().collection('microServices').doc(value.id).set(Object.assign({}, value)).then(
        () => {
          resolve();
        }, (error) => {
          reject(error);
        }
      );
    });
  }
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

  async getMicroServices() {
    return new Promise<MicroService[]>((resolve, reject) => {
      // @ts-ignore
      firebase.firestore().collection('microServices').onSnapshot(
        (docRef) => {
          const result: MicroService[] = [];
          docRef.forEach(function(doc) {
            if(doc.data().status !== 0) {
              result.push(doc.data() as MicroService);
            }
          });
          resolve(result as any);
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

  async getMicroServiceWitchId(idMs: string) {
    return new Promise<MicroService>((resolve, reject) => {
      firebase.firestore().collection('microServices').doc(idMs).get().then(
        (docRef) => {
          resolve(docRef.data() as MicroService);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
}
