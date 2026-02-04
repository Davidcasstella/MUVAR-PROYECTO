import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * Interceptor de autenticación
 * Agrega el token de autorización a las peticiones HTTP
 */
export const autenticacionInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  // TODO: Implementar inyección de token desde servicio de almacenamiento
  // const token = this.almacenamientoSvc.obtenerToken();

  const token = localStorage.getItem('muvar_token');

  if (token) {
    const reqAutenticada = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(reqAutenticada);
  }

  return next(req);
};
