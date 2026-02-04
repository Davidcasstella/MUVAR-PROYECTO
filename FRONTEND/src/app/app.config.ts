import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withViewTransitions
} from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RUTAS_APP } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // Router con funcionalidades avanzadas
    provideRouter(
      RUTAS_APP,
      withComponentInputBinding(),
      withViewTransitions()
    ),

    // HttpClient
    provideHttpClient(),

    // Animaciones
    provideAnimationsAsync()
  ]
};
