import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {

      const firebaseConfig = {
        apiKey: 'AIzaSyAb8GwOi3KgI-Dpkcg8s1Tt5LmoKmiuYGk',
        authDomain: 'x-experience.firebaseapp.com',
        projectId: 'x-experience',
        storageBucket: 'x-experience.appspot.com',
        messagingSenderId: '862065252195',
        appId: '1:862065252195:web:4fcec028a27396bb3ca556'
      };

      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

      // Activation de la persistance de donnée
      firebase.firestore().enablePersistence();
    });
  }
}
