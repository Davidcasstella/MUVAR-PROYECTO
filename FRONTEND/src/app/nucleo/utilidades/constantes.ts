/**
 * Constantes globales de la aplicación
 */

// ============================================
// RUTAS
// ============================================
export const RUTAS = {
  ACCESO: '/acceso',
  REGISTRO: '/registro',
  RECUPERAR_PASSWORD: '/recuperar-password',
  DASHBOARD: '/app/dashboard',
  USUARIOS: '/app/usuarios',
  NO_ENCONTRADO: '/404',
  SIN_PERMISOS: '/403',
  ERROR_SERVIDOR: '/500'
} as const;

// ============================================
// LÍMITES
// ============================================
export const LIMITES = {
  PAGINACION_POR_DEFECTO: 10,
  PAGINACION_MAXIMO: 100,
  INTENTOS_LOGIN: 3,
  DURACION_TOKEN: 3600 // 1 hora en segundos
} as const;

// ============================================
// MENSAJES DE ERROR
// ============================================
export const MENSAJES_ERROR = {
  CREDENCIALES_INVALIDAS: 'Usuario o contraseña incorrectos',
  SESION_EXPIRADA: 'Tu sesión ha expirado. Por favor, inicia sesión nuevamente',
  SIN_PERMISOS: 'No tienes permisos para realizar esta acción',
  ERROR_CONEXION: 'Error de conexión. Por favor, verifica tu red',
  RECURSO_NO_ENCONTRADO: 'El recurso solicitado no existe'
} as const;

// ============================================
// EXPRESIONES REGULARES
// ============================================
export const PATRONES = {
  EMAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  TELEFONO: /^\+?[1-9]\d{1,14}$/,
  URL: /^https?:\/\/[\w\-.]+(:\d+)?(\/[\w\-._~:/?#[\]@!$&'()*+,;=%]*)?$/
} as const;

// ============================================
// CLAVES DE ALMACENAMIENTO
// ============================================
export const CLAVES_ALMACENAMIENTO = {
  TOKEN: 'muvar_token',
  USUARIO: 'muvar_usuario',
  TEMA: 'muvar_tema',
  IDIOMA: 'muvar_idioma',
  REFRESCAR_TOKEN: 'muvar_refresh_token'
} as const;
