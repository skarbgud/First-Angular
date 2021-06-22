import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
// import { BOOMR } from 'boomerangjs';

// BOOMR.init({
//   beacon_url: "http://http://192.168.121.164:4200/beacon",
//   angular: true,
  
// });

declare global {
  interface Window { strum: Function; }
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
