/**
 * Parámetros de paginación
 */
export interface PaginacionParams {
  pagina?: number;
  limite?: number;
  ordenar?: string;
  orden?: 'asc' | 'desc';
  busqueda?: string;
}

/**
 * Parámetros de paginación con filtros adicionales
 */
export interface PaginacionConFiltros<T = Record<string, unknown>> extends PaginacionParams {
  filtros?: T;
}
