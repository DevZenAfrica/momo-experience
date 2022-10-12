import { Injectable } from '@angular/core';
import {SafeResourceUrl} from '@angular/platform-browser';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  async addImageForAdresseId(name: string, adresse: string, image: SafeResourceUrl ) {
    // @ts-ignore
    return new Promise<string>((resolve, reject) => {
      if(image === '') {
        resolve('');
      } else {
        const imgStorageRef = firebase.storage().ref(adresse + '/' + name + '.png');
        const newPhoto: string = image.toString().substring(image.toString().indexOf('base64,') + 7, image.toString().indexOf('(see ') - 1);
        return imgStorageRef.putString(newPhoto, 'base64', {contentType: 'image/png'}).then(
          () => {
            return imgStorageRef.getDownloadURL().then(downloadUrl => {
              resolve(downloadUrl);
            });
          },
          (error) => {
            reject(error);
          }
        );
      }
    });
  }
}
