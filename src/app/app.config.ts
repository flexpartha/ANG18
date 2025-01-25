import {
  ApplicationConfig,
  Injector,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

// import {
//   ROLE_BASED_SERVICE,
//   roleBasedServiceFactory,
// } from './pages/service/factory/factoryservice.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    // {
    //   provide: ROLE_BASED_SERVICE,
    //   useFactory: roleBasedServiceFactory,
    //   deps: [Injector],
    // },
  ],
};
