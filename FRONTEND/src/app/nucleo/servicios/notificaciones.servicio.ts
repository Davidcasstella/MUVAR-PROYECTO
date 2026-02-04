import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TipoNotificacion } from '../utilidades';

/**
 * Interfaz de notificación
 */
export interface Notificacion {
  tipo: TipoNotificacion;
  mensaje: string;
  duracion?: number;
}

/**
 * Servicio de notificaciones
 * Muestra notificaciones toast/alertas en la aplicación
 */
@Injectable({ providedIn: 'root' })
export class NotificacionesServicio {
  private readonly notificaciones$ = new Subject<Notificacion>();

  /**
   * Observable de notificaciones
   */
  readonly notificaciones = this.notificaciones$.asObservable();

  /**
   * Muestra una notificación de éxito
   */
  mostrarExito(mensaje: string, duracion = 5000): void {
    this.notificaciones$.next({
      tipo: 'exito' as TipoNotificacion,
      mensaje,
      duracion
    });
  }

  /**
   * Muestra una notificación de error
   */
  mostrarError(mensaje: string, duracion = 7000): void {
    this.notificaciones$.next({
      tipo: 'error' as TipoNotificacion,
      mensaje,
      duracion
    });
  }

  /**
   * Muestra una notificación de advertencia
   */
  mostrarAdvertencia(mensaje: string, duracion = 6000): void {
    this.notificaciones$.next({
      tipo: 'advertencia' as TipoNotificacion,
      mensaje,
      duracion
    });
  }

  /**
   * Muestra una notificación informativa
   */
  mostrarInformacion(mensaje: string, duracion = 5000): void {
    this.notificaciones$.next({
      tipo: 'informacion' as TipoNotificacion,
      mensaje,
      duracion
    });
  }

  /**
   * Muestra una notificación genérica
   */
  mostrar(notificacion: Notificacion): void {
    this.notificaciones$.next(notificacion);
  }

  /**
   * Limpia todas las notificaciones
   */
  limpiar(): void {
    this.notificaciones$.complete();
  }
}
