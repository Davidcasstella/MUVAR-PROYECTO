/**
 * Respuesta estándar de la API
 */
export interface RespuestaApi<T> {
  exito: boolean;
  datos: T;
  mensaje?: string;
  errores?: string[];
}

/**
 * Envoltorio de paginación para respuestas de lista
 */
export interface PaginacionRespuesta<T> {
  datos: T[];
  total: number;
  pagina: number;
  limite: number;
  totalPaginas: number;
}
