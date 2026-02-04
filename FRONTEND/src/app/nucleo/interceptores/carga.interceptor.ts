import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Observable, finalize, tap } from 'rxjs';

/**
 * Interceptor de carga
 * Muestra/oculta indicadores de carga durante peticiones HTTP
 */
export const cargaInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  // TODO: Implementar con servicio de carga
  console.log('🔄 Iniciando petición:', req.url);

  return next(req).pipe(
    tap({
      next: (event) => {
        if (event.type === 4) {
          // Response final
          console.log('✅ Petición completada:', req.url);
        }
      }
    }),
    finalize(() => {
      console.log('🏁 Petición finalizada:', req.url);
    })
  );
};
