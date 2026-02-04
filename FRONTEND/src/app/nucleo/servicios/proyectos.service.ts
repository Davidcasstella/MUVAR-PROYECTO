import { Injectable, inject } from '@angular/core';
import { Observable, of, delay, tap } from 'rxjs';
import {
  Proyecto,
  EstadoProyecto,
  CiudadProyecto,
  FiltrosProyectos,
  RespuestaProyectosPaginados
} from '../modelos/proyecto.model';

/**
 * Servicio de Proyectos
 * Proporciona datos de proyectos inmobiliarios
 * Actualmente usa datos mock - preparado para integrar backend real
 */
@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  private readonly MOCK_DELAY = 300; // Simula latencia de red

  private proyectosMock: Proyecto[] = [
    {
      id: '1',
      nombre: 'Torre Central Duitama',
      ubicacion: CiudadProyecto.DUITAMA,
      direccion: 'Calle 12 # 5-32, Zona Centro',
      estado: EstadoProyecto.EN_CONSTRUCCION,
      fechaEntrega: new Date('2026-06-30'),
      descripcion: 'Edificio residencial de lujo en el corazón de Duitama. 18 pisos con apartamentos desde 2 hasta 4 habitaciones. Diseño moderno con acabados de primera calidad y vistas panorámicas de la ciudad.',
      imagenes: [
        {
          id: '1-1',
          url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
          titulo: 'Fachada Principal',
          esPrincipal: true,
          orden: 1
        },
        {
          id: '1-2',
          url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
          titulo: 'Apartamento Modelo',
          esPrincipal: false,
          orden: 2
        },
        {
          id: '1-3',
          url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
          titulo: 'Área Social',
          esPrincipal: false,
          orden: 3
        }
      ],
      caracteristicas: [
        { id: 'c1', icono: 'bed', etiqueta: 'Habitaciones', valor: '2-4', categoria: 'general' },
        { id: 'c2', icono: 'bath', etiqueta: 'Baños', valor: '2-3', categoria: 'general' },
        { id: 'c3', icono: 'square', etiqueta: 'Área', valor: '85-150 m²', categoria: 'areas' },
        { id: 'c4', icono: 'car', etiqueta: 'Parqueadero', valor: '2', categoria: 'amenidades' },
        { id: 'c5', icono: 'users', etiqueta: 'Zona BBQ', valor: 'Sí', categoria: 'amenidades' },
        { id: 'c6', icono: 'shield', etiqueta: 'Seguridad 24/7', valor: 'Sí', categoria: 'amenidades' }
      ],
      precios: {
        moneda: 'COP',
        rango: { desde: 280000000, hasta: 450000000 },
        cuotaInicialDesde: 28000000
      },
      metadatos: {
        fechaCreacion: new Date('2024-01-15'),
        fechaActualizacion: new Date('2024-12-01'),
        destacado: true,
        ordenDestacado: 1
      }
    },
    {
      id: '2',
      nombre: 'Residencial Los Arrayanes',
      ubicacion: CiudadProyecto.TUNJA,
      direccion: 'Carrera 10 # 23-45, Norte',
      estado: EstadoProyecto.PREVENTA,
      fechaEntrega: new Date('2027-03-31'),
      descripcion: 'Conjunto residencial exclusivo con 30 unidades de vivienda. Arquitectura contemporánea que se integra con el entorno natural. Ideal para familias que buscan tranquilidad y espacios verdes.',
      imagenes: [
        {
          id: '2-1',
          url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
          titulo: 'Fachada Externa',
          esPrincipal: true,
          orden: 1
        },
        {
          id: '2-2',
          url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
          titulo: 'Interior',
          esPrincipal: false,
          orden: 2
        }
      ],
      caracteristicas: [
        { id: 'c7', icono: 'bed', etiqueta: 'Habitaciones', valor: '3', categoria: 'general' },
        { id: 'c8', icono: 'bath', etiqueta: 'Baños', valor: '2', categoria: 'general' },
        { id: 'c9', icono: 'square', etiqueta: 'Área', valor: '120 m²', categoria: 'areas' },
        { id: 'c10', icono: 'tree', etiqueta: 'Jardín privado', valor: 'Sí', categoria: 'amenidades' },
        { id: 'c11', icono: 'car', etiqueta: 'Parqueadero', valor: '2', categoria: 'amenidades' }
      ],
      precios: {
        moneda: 'COP',
        rango: { desde: 350000000, hasta: 420000000 },
        cuotaInicialDesde: 35000000
      },
      metadatos: {
        fechaCreacion: new Date('2024-08-01'),
        fechaActualizacion: new Date('2024-11-20'),
        destacado: true,
        ordenDestacado: 2
      }
    },
    {
      id: '3',
      nombre: 'Altos de Sogamoso',
      ubicacion: CiudadProyecto.SOGAMOSO,
      direccion: 'Avenida Libertadores # 45-67',
      estado: EstadoProyecto.ENTREGADO,
      fechaEntrega: new Date('2024-09-15'),
      descripcion: 'Proyecto residencial entregado con calidad certificada. Apartamentos modernos con excelente iluminación natural. Cerca a centros educativos, comercios y parques.',
      imagenes: [
        {
          id: '3-1',
          url: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&h=600&fit=crop',
          titulo: 'Edificio Completo',
          esPrincipal: true,
          orden: 1
        },
        {
          id: '3-2',
          url: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
          titulo: 'Sala Estar',
          esPrincipal: false,
          orden: 2
        }
      ],
      caracteristicas: [
        { id: 'c12', icono: 'bed', etiqueta: 'Habitaciones', valor: '2-3', categoria: 'general' },
        { id: 'c13', icono: 'bath', etiqueta: 'Baños', valor: '1-2', categoria: 'general' },
        { id: 'c14', icono: 'square', etiqueta: 'Área', valor: '70-95 m²', categoria: 'areas' },
        { id: 'c15', icono: 'car', etiqueta: 'Parqueadero', valor: '1', categoria: 'amenidades' },
        { id: 'c16', icono: 'shield', etiqueta: 'Circuito cerrado', valor: 'Sí', categoria: 'amenidades' }
      ],
      precios: {
        moneda: 'COP',
        rango: { desde: 220000000, hasta: 290000000 },
        cuotaInicialDesde: 22000000
      },
      metadatos: {
        fechaCreacion: new Date('2023-05-10'),
        fechaActualizacion: new Date('2024-09-15'),
        destacado: true,
        ordenDestacado: 3
      }
    },
    {
      id: '4',
      nombre: 'Torres del Bosque',
      ubicacion: CiudadProyecto.BOGOTA,
      direccion: 'Calle 134 # 15-32, Usaquén',
      estado: EstadoProyecto.EN_CONSTRUCCION,
      fechaEntrega: new Date('2027-08-30'),
      descripcion: 'Complejo de torres residenciales en el norte de Bogotá. Diseño sostenible con certificación LEED. Amenidades premium: piscina, gym, coworking y zonas verdes.',
      imagenes: [
        {
          id: '4-1',
          url: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=800&h=600&fit=crop',
          titulo: 'Render Fachada',
          esPrincipal: true,
          orden: 1
        }
      ],
      caracteristicas: [
        { id: 'c17', icono: 'bed', etiqueta: 'Habitaciones', valor: '3-5', categoria: 'general' },
        { id: 'c18', icono: 'square', etiqueta: 'Área', valor: '140-220 m²', categoria: 'areas' },
        { id: 'c19', icono: 'water', etiqueta: 'Piscina', valor: 'Sí', categoria: 'amenidades' },
        { id: 'c20', icono: 'fitness', etiqueta: 'Gym', valor: 'Sí', categoria: 'amenidades' }
      ],
      precios: {
        moneda: 'COP',
        rango: { desde: 650000000, hasta: 950000000 },
        cuotaInicialDesde: 65000000
      },
      metadatos: {
        fechaCreacion: new Date('2024-06-01'),
        fechaActualizacion: new Date('2024-11-15'),
        destacado: false
      }
    },
    {
      id: '5',
      nombre: 'Villas del Campo',
      ubicacion: CiudadProyecto.DUITAMA,
      direccion: 'Kilómetro 3 Vía Paipa',
      estado: EstadoProyecto.PREVENTA,
      fechaEntrega: new Date('2026-12-15'),
      descripcion: 'Conjunto de casas campestres con lotes desde 300 m². Diseño colonial moderno con terrazas y jardines. Espacio abierto y seguridad integral.',
      imagenes: [
        {
          id: '5-1',
          url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
          titulo: 'Casa Modelo',
          esPrincipal: true,
          orden: 1
        }
      ],
      caracteristicas: [
        { id: 'c21', icono: 'bed', etiqueta: 'Habitaciones', valor: '4', categoria: 'general' },
        { id: 'c22', icono: 'square', etiqueta: 'Lote', valor: '300-500 m²', categoria: 'areas' },
        { id: 'c23', icono: 'tree', etiqueta: 'Jardín', valor: 'Sí', categoria: 'amenidades' },
        { id: 'c24', icono: 'car', etiqueta: 'Parqueadero', valor: '3', categoria: 'amenidades' }
      ],
      precios: {
        moneda: 'COP',
        rango: { desde: 480000000, hasta: 620000000 },
        cuotaInicialDesde: 48000000
      },
      metadatos: {
        fechaCreacion: new Date('2024-09-01'),
        fechaActualizacion: new Date('2024-10-30'),
        destacado: false
      }
    },
    {
      id: '6',
      nombre: 'Apartamentos Estudiantiles UNIBOYACA',
      ubicacion: CiudadProyecto.TUNJA,
      direccion: 'Calle 25 # 8-12, Cerca Universidad',
      estado: EstadoProyecto.ENTREGADO,
      fechaEntrega: new Date('2024-02-28'),
      descripcion: 'Edificio diseñado especialmente para estudiantes. Unidades amobladas desde estudios hasta 2 habitaciones. Zonas de estudio, wifi y lavandería.',
      imagenes: [
        {
          id: '6-1',
          url: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&h=600&fit=crop',
          titulo: 'Fachada',
          esPrincipal: true,
          orden: 1
        }
      ],
      caracteristicas: [
        { id: 'c25', icono: 'bed', etiqueta: 'Habitaciones', valor: '1-2', categoria: 'general' },
        { id: 'c26', icono: 'square', etiqueta: 'Área', valor: '35-55 m²', categoria: 'areas' },
        { id: 'c27', icono: 'wifi', etiqueta: 'WiFi', valor: 'Incluido', categoria: 'amenidades' },
        { id: 'c28', icono: 'book', etiqueta: 'Zona de estudio', valor: 'Sí', categoria: 'amenidades' }
      ],
      precios: {
        moneda: 'COP',
        rango: { desde: 140000000, hasta: 180000000 },
        cuotaInicialDesde: 14000000
      },
      metadatos: {
        fechaCreacion: new Date('2023-08-15'),
        fechaActualizacion: new Date('2024-02-28'),
        destacado: false
      }
    }
  ];

  /**
   * Obtiene los proyectos destacados
   */
  obtenerProyectosDestacados(): Observable<Proyecto[]> {
    return of(
      this.proyectosMock
        .filter((p) => p.metadatos.destacado)
        .sort((a, b) => (a.metadatos.ordenDestacado || 0) - (b.metadatos.ordenDestacado || 0))
    ).pipe(delay(this.MOCK_DELAY));
  }

  /**
   * Obtiene todos los proyectos con paginación
   */
  obtenerProyectos(
    pagina: number = 1,
    elementosPorPagina: number = 9,
    filtros?: FiltrosProyectos
  ): Observable<RespuestaProyectosPaginados> {
    let proyectosFiltrados = [...this.proyectosMock];

    // Aplicar filtros
    if (filtros) {
      if (filtros.ciudad && filtros.ciudad.length > 0) {
        proyectosFiltrados = proyectosFiltrados.filter((p) =>
          filtros.ciudad!.includes(p.ubicacion)
        );
      }

      if (filtros.estado && filtros.estado.length > 0) {
        proyectosFiltrados = proyectosFiltrados.filter((p) =>
          filtros.estado!.includes(p.estado)
        );
      }

      if (filtros.busqueda) {
        const busqueda = filtros.busqueda.toLowerCase();
        proyectosFiltrados = proyectosFiltrados.filter(
          (p) =>
            p.nombre.toLowerCase().includes(busqueda) ||
            p.ubicacion.toLowerCase().includes(busqueda) ||
            p.descripcion.toLowerCase().includes(busqueda)
        );
      }

      if (filtros.precioMin !== undefined) {
        proyectosFiltrados = proyectosFiltrados.filter(
          (p) => p.precios.rango.desde >= filtros.precioMin!
        );
      }

      if (filtros.precioMax !== undefined) {
        proyectosFiltrados = proyectosFiltrados.filter(
          (p) => p.precios.rango.hasta <= filtros.precioMax!
        );
      }
    }

    // Paginación
    const total = proyectosFiltrados.length;
    const totalPaginas = Math.ceil(total / elementosPorPagina);
    const inicio = (pagina - 1) * elementosPorPagina;
    const fin = inicio + elementosPorPagina;
    const proyectosPaginados = proyectosFiltrados.slice(inicio, fin);

    const respuesta: RespuestaProyectosPaginados = {
      proyectos: proyectosPaginados,
      paginacion: {
        pagina,
        elementosPorPagina,
        total,
        totalPaginas
      }
    };

    return of(respuesta).pipe(delay(this.MOCK_DELAY));
  }

  /**
   * Obtiene un proyecto por ID
   */
  obtenerProyectoPorId(id: string): Observable<Proyecto | undefined> {
    const proyecto = this.proyectosMock.find((p) => p.id === id);
    return of(proyecto).pipe(delay(this.MOCK_DELAY));
  }

  /**
   * Obtiene proyectos relacionados
   */
  obtenerProyectosRelacionados(proyectoId: string, limite: number = 3): Observable<Proyecto[]> {
    const proyecto = this.proyectosMock.find((p) => p.id === proyectoId);
    if (!proyecto) {
      return of([]);
    }

    const relacionados = this.proyectosMock
      .filter((p) => p.id !== proyectoId && p.ubicacion === proyecto.ubicacion)
      .slice(0, limite);

    return of(relacionados).pipe(delay(this.MOCK_DELAY));
  }

  /**
   * Formatea precio a moneda local
   */
  static formatearPrecio(precio: number): string {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0
    }).format(precio);
  }

  /**
   * Obtiene etiqueta de estado formateada
   */
  static obtenerEtiquetaEstado(estado: EstadoProyecto): string {
    const etiquetas: Record<EstadoProyecto, string> = {
      [EstadoProyecto.EN_CONSTRUCCION]: 'En Construcción',
      [EstadoProyecto.PREVENTA]: 'Preventa',
      [EstadoProyecto.ENTREGADO]: 'Entregado',
      [EstadoProyecto.VENDIDO]: 'Vendido'
    };
    return etiquetas[estado];
  }
}
