import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * Interceptor de cabeceras
 * Agrega cabeceras comunes a todas las peticiones HTTP
 */
export const cabecerasInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  const reqConCabeceras = req.clone({
    setHeaders: {
      'Content-Type': 'application/json',
      'X-App-Version': '1.0.0',
      'X-Client-Platform': 'web'
    }
  });

  return next(reqConCabeceras);
};
