/**
 * Enumeraciones globales de la aplicación
 */

/**
 * Roles de usuario
 */
export enum RolUsuario {
  ADMINISTRADOR = 'administrador',
  OPERADOR = 'operador',
  VISUALIZADOR = 'visualizador'
}

/**
 * Estados de usuario
 */
export enum EstadoUsuario {
  ACTIVO = 'activo',
  INACTIVO = 'inactivo',
  BLOQUEADO = 'bloqueado',
  PENDIENTE = 'pendiente'
}

/**
 * Tipos de notificación
 */
export enum TipoNotificacion {
  EXITO = 'exito',
  ERROR = 'error',
  ADVERTENCIA = 'advertencia',
  INFORMACION = 'informacion'
}

/**
 * Temas de la aplicación
 */
export enum TemaAplicacion {
  CLARO = 'claro',
  OSCURO = 'oscuro',
  SISTEMA = 'sistema'
}

/**
 * Idiomas soportados
 */
export enum Idioma {
  ESPANOL = 'es',
  INGLES = 'en'
}

/**
 * Estados de carga
 */
export enum EstadoCarga {
  INACTIVO = 'inactivo',
  CARGANDO = 'cargando',
  EXITO = 'exito',
  ERROR = 'error'
}
