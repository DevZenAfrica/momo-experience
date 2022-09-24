import { Injectable } from '@angular/core';
import { GroupOperator } from '../models/groupOperator';
import {Operator} from "../models/operator";
import firebase from "firebase";

@Injectable({
  providedIn: 'root'
})
export class OperatorService {

  constructor() { }

  async addOperator(value: any) {
    return new Promise<void>((resolve, reject) => {
      // @ts-ignore
      firebase.firestore().collection('operators').doc(value.id).set(Object.assign({}, value)).then(
        () => {
          resolve();
        }, (error) => {
          reject(error);
        }
      );
    });
  }

  async addGroupOperator(value: any) {
    return new Promise<void>((resolve, reject) => {
      // @ts-ignore
      firebase.firestore().collection('groupOperators').doc(value.id).set(Object.assign({}, value)).then(
        () => {
          resolve();
        }, (error) => {
          reject(error);
        }
      );
    });
  }

  async getOperator() {
    return new Promise<Operator[]>((resolve, reject) => {
      // @ts-ignore
      firebase.firestore().collection('operators').orderBy('date', 'desc').onSnapshot(
        (docRef) => {
          const result: Operator[] = [];
          docRef.forEach(function(doc) {
            if(doc.data().status !== 0) {
              result.push(doc.data() as Operator);
            }
          });
          resolve(result as any);
        }, (error) => {
          reject(error);
        }
      );
    });
  }

  async getOperatorWitchId(idOperator: string) {
    return new Promise<Operator>((resolve, reject) => {
      firebase.firestore().collection('operators').doc(idOperator).get().then(
        (docRef) => {
          resolve(docRef.data() as Operator);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  async getGroupOperator() {
    return new Promise<GroupOperator[]>((resolve, reject) => {
      // @ts-ignore
      firebase.firestore().collection('groupOperators').onSnapshot(
        (docRef) => {
          const result: GroupOperator[] = [];
          docRef.forEach(function(doc) {
            if(doc.data().status !== 0) {
              result.push(doc.data() as GroupOperator);
            }
          });
          resolve(result as any);
        }, (error) => {
          reject(error);
        }
      );
    });
  }

  async getGroupOperatorWitchId(idGroupOperator: string) {
    return new Promise<GroupOperator>((resolve, reject) => {
      firebase.firestore().collection('groupOperators').doc(idGroupOperator).get().then(
        (docRef) => {
          resolve(docRef.data() as GroupOperator);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
}
