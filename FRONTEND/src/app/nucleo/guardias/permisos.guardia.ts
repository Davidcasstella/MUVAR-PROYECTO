import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AlmacenamientoServicio } from '../servicios';

/**
 * Guardia de permisos
 * Verifica que el usuario tenga los permisos necesarios
 * @param permiso - Permiso requerido (ej: 'usuarios.crear')
 */
export const permisosGuardia = (permiso: string): CanActivateFn => {
  return () => {
    const almacenamientoSvc = inject(AlmacenamientoServicio);
    const router = inject(Router);

    const usuario = almacenamientoSvc.obtenerUsuario() as any;
    const permisosUsuario = usuario?.permisos || [];

    if (!permisosUsuario.includes(permiso)) {
      router.navigate(['/403']);
      return false;
    }

    return true;
  };
};
