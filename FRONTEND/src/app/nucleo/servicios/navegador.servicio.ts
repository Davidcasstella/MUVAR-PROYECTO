import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Servicio de navegación
 * Proporciona métodos para navegación centralizada
 */
@Injectable({ providedIn: 'root' })
export class NavegadorServicio {
  private readonly router = inject(Router);

  /**
   * Navega a una ruta específica
   */
  navegar(ruta: string[], queryParams?: Record<string, string>): Promise<boolean> {
    return this.router.navigate(ruta, { queryParams });
  }

  /**
   * Navega a la página de acceso
   */
  navegarAcceso(): Promise<boolean> {
    return this.router.navigate(['/acceso']);
  }

  /**
   * Navega al dashboard
   */
  navegarDashboard(): Promise<boolean> {
    return this.router.navigate(['/app/dashboard']);
  }

  /**
   * Navega a la página 404
   */
  navegarNoEncontrado(): Promise<boolean> {
    return this.router.navigate(['/404']);
  }

  /**
   * Navega a la página de sin permisos
   */
  navegarSinPermisos(): Promise<boolean> {
    return this.router.navigate(['/403']);
  }

  /**
   * Vuelve a la página anterior
   */
  volver(): Promise<boolean> {
    return this.router.navigate(['..']);
  }

  /**
   * Obtiene la URL actual
   */
  obtenerUrlActual(): string {
    return this.router.url;
  }
}
