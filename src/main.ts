/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/pages/app.module';
import { register } from "swiper/element/bundle";

register();
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
