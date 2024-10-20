import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { environment } from './app/environments/environment';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { enableProdMode } from '@angular/core';

// Initialize Firebase app
const app = initializeApp(environment.firebaseConfig);
const analytics = getAnalytics(app);

// Check if the app is in production mode
if (environment.production) {
  enableProdMode();
}

// Bootstrap the Angular app with the AppComponent
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
