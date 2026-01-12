import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

async function initApp() {
  try {
    const response = await fetch('assets/config/config.json');
    
    if (response.ok) {
      const config = await response.json();
      (window as any).__APP_CONFIG__ = config;
    } else {
      console.warn('Config file not found, using defaults');
      (window as any).__APP_CONFIG__ = {};
    }
  } catch (error) {
    console.warn('Failed to load config, using defaults:', error);
    (window as any).__APP_CONFIG__ = {};
  }

  await bootstrapApplication(AppComponent, appConfig);
}

initApp().catch((err) => {
  console.error('App bootstrap failed:', err);
});
