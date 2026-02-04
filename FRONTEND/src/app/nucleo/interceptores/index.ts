/**
 * Interceptores HTTP del núcleo
 */
export * from './autenticacion.interceptor';
export * from './cabeceras.interceptor';
export * from './errores.interceptor';
export * from './carga.interceptor';

import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';

/**
 * Proveedores de interceptores para inyectar en app.config.ts
 */
export const PROVEEDORES_INTERCEPTORES = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: /* AutenticacionInterceptor */ null,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: /* CabecerasInterceptor */ null,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: /* ErroresInterceptor */ null,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: /* CargaInterceptor */ null,
    multi: true
  }
];
