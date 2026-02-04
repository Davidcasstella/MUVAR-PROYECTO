/**
 * Modelo de Proyecto Inmobiliario
 * Define la estructura de datos para proyectos de Inversiones Muvar
 */

export enum EstadoProyecto {
  EN_CONSTRUCCION = 'EN_CONSTRUCCION',
  PREVENTA = 'PREVENTA',
  ENTREGADO = 'ENTREGADO',
  VENDIDO = 'VENDIDO'
}

export enum CiudadProyecto {
  DUITAMA = 'Duitama',
  TUNJA = 'Tunja',
  SOGAMOSO = 'Sogamoso',
  BOGOTA = 'Bogotá'
}

export interface Proyecto {
  id: string;
  nombre: string;
  ubicacion: CiudadProyecto;
  direccion: string;
  estado: EstadoProyecto;
  fechaEntrega: Date;
  descripcion: string;
  imagenes: ProyectoImagen[];
  caracteristicas: CaracteristicaProyecto[];
  precios: PreciosProyecto;
  metadatos: MetadatosProyecto;
}

export interface ProyectoImagen {
  id: string;
  url: string;
  titulo: string;
  descripcion?: string;
  esPrincipal: boolean;
  orden: number;
}

export interface CaracteristicaProyecto {
  id: string;
  icono: string;
  etiqueta: string;
  valor: string;
  categoria: 'general' | 'areas' | 'amenidades';
}

export interface PreciosProyecto {
  moneda: 'COP' | 'USD';
  rango: {
    desde: number;
    hasta: number;
  };
  cuotaInicialDesde: number;
}

export interface MetadatosProyecto {
  fechaCreacion: Date;
  fechaActualizacion: Date;
  destacado: boolean;
  ordenDestacado?: number;
  proyectoUrl?: string;
}

/**
 * Interfaces para filtros y búsqueda
 */
export interface FiltrosProyectos {
  ciudad?: CiudadProyecto[];
  estado?: EstadoProyecto[];
  busqueda?: string;
  precioMin?: number;
  precioMax?: number;
}

/**
 * Interfaces para paginación
 */
export interface PaginacionProyectos {
  pagina: number;
  elementosPorPagina: number;
  total: number;
  totalPaginas: number;
}

export interface RespuestaProyectosPaginados {
  proyectos: Proyecto[];
  paginacion: PaginacionProyectos;
}
