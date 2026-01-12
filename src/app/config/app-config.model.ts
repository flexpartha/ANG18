export interface AppConfig {
  apiUrl: string;
  authUrl: string;
  featureFlag: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}
