import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
// ✅ Named import, not default
import { register } from 'swiper/element/bundle';

// Register swiper web components globally
register();
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
