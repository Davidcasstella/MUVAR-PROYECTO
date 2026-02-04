import { Injectable } from '@angular/core';

/**
 * Servicio de almacenamiento local y de sesión
 * Maneja localStorage y sessionStorage de forma tipada
 */
@Injectable({ providedIn: 'root' })
export class AlmacenamientoServicio {
  // Claves de almacenamiento
  private readonly CLAVES = {
    TOKEN: 'muvar_token',
    USUARIO: 'muvar_usuario',
    TEMA: 'muvar_tema',
    IDIOMA: 'muvar_idioma'
  } as const;

  /**
   * Guarda el token de autenticación
   */
  guardarToken(token: string): void {
    localStorage.setItem(this.CLAVES.TOKEN, token);
  }

  /**
   * Obtiene el token de autenticación
   */
  obtenerToken(): string | null {
    return localStorage.getItem(this.CLAVES.TOKEN);
  }

  /**
   * Elimina el token de autenticación
   */
  limpiarToken(): void {
    localStorage.removeItem(this.CLAVES.TOKEN);
  }

  /**
   * Guarda el usuario actual
   */
  guardarUsuario(usuario: unknown): void {
    localStorage.setItem(this.CLAVES.USUARIO, JSON.stringify(usuario));
  }

  /**
   * Obtiene el usuario actual
   */
  obtenerUsuario(): unknown | null {
    const usuario = localStorage.getItem(this.CLAVES.USUARIO);
    return usuario ? JSON.parse(usuario) : null;
  }

  /**
   * Limpia todos los datos de almacenamiento
   */
  limpiarTodo(): void {
    localStorage.clear();
    sessionStorage.clear();
  }

  /**
   * Guarda datos en sessionStorage
   */
  guardarSession(clave: string, valor: string): void {
    sessionStorage.setItem(clave, valor);
  }

  /**
   * Obtiene datos de sessionStorage
   */
  obtenerSession(clave: string): string | null {
    return sessionStorage.getItem(clave);
  }
}
