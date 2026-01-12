import { Injectable } from '@angular/core';
import { AppConfig } from './app-config.model';

@Injectable({
  providedIn: 'root',
})
export class AppConfigService {
  private readonly config: AppConfig = (window as any).__APP_CONFIG__;

  get apiUrl(): string {
    return this.config.apiUrl;
  }

  get authUrl(): string {
    return this.config.authUrl;
  }

  get featureFlag(): boolean {
    return this.config.featureFlag;
  }

  get logLevel(): string {
    return this.config.logLevel;
  }
}
