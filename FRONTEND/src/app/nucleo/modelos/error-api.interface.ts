/**
 * Error estándar de la API
 */
export interface ErrorApi {
  codigo: string;
  mensaje: string;
  detalles?: unknown;
  timestamp: string;
  ruta: string;
}
