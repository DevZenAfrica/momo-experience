import { Injectable } from '@angular/core';
import {GroupMicroService} from "../models/groupMicroService";
import firebase from "firebase";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  async getNotifications() {
    return new Promise<Notification[]>((resolve, reject) => {
      // @ts-ignore
      firebase.firestore().collection('notifications').where('idUser', 'array-contains', firebase.auth().currentUser.email).onSnapshot(
        (docRef) => {
          const result: Notification[] = [];
          docRef.forEach(function(doc) {
            if(doc.data().status !== 0) {
              result.push(doc.data() as Notification);
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
