import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AlmacenamientoServicio } from '../servicios';

/**
 * Guardia de autenticación
 * Verifica que el usuario esté autenticado
 */
export const autenticacionGuardia: CanActivateFn = () => {
  const almacenamientoSvc = inject(AlmacenamientoServicio);
  const router = inject(Router);

  const token = almacenamientoSvc.obtenerToken();

  if (!token) {
    router.navigate(['/acceso'], {
      queryParams: { redirigir: router.url }
    });
    return false;
  }

  return true;
};
