import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

/**
 * Interceptor de errores
 * Maneja centralizadamente los errores HTTP
 */
export const erroresInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  // Nota: El router no se puede inyectar directamente en funciones interceptor
  // Se necesita usar inject() de Angular o un servicio
  const router = undefined as any; // TODO: Implementar con inject()

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        // TODO: router.navigate(['/acceso']);
        console.error('Sesión expirada');
      } else if (error.status === 403) {
        // TODO: router.navigate(['/403']);
        console.error('Sin permisos');
      } else if (error.status >= 500) {
        // TODO: router.navigate(['/500']);
        console.error('Error del servidor');
      }

      return throwError(() => error);
    })
  );
};
