import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { Observable, combineLatest, startWith } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import {
  Proyecto,
  RespuestaProyectosPaginados,
  EstadoProyecto,
  CiudadProyecto,
  FiltrosProyectos
} from '@nucleo/modelos/proyecto.model';
import { ProyectosService } from '@nucleo/servicios/proyectos.service';
import { NavbarComponent } from '@compartido/componentes-ui/landing/navbar/navbar.component';
import { ProyectoCardComponent } from '@compartido/componentes-ui/landing/proyecto-card/proyecto-card.component';
import { WhatsappButtonComponent } from '@compartido/componentes-ui/landing/whatsapp-button/whatsapp-button.component';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NavbarComponent,
    ProyectoCardComponent,
    WhatsappButtonComponent
  ],
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {
  proyectos$!: Observable<RespuestaProyectosPaginados>;
  paginaActual = 1;
  elementosPorPagina = 9;
  totalProyectos = 0;
  totalPaginas = 0;
  estaCargando = true;

  // Filtros
  busquedaControl = new FormControl('');
  ciudadesSeleccionadas: CiudadProyecto[] = [];
  estadosSeleccionados: EstadoProyecto[] = [];

  // Opciones de filtro
  ciudades = Object.values(CiudadProyecto);
  estados = Object.values(EstadoProyecto);

  constructor(
    private router: Router,
    private proyectosService: ProyectosService
  ) {}

  ngOnInit(): void {
    this.cargarProyectos();
    this.setupBusqueda();
  }

  private setupBusqueda(): void {
    this.busquedaControl.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged(), startWith(''))
      .subscribe(() => {
        this.paginaActual = 1;
        this.cargarProyectos();
      });
  }

  private cargarProyectos(): void {
    const filtros: FiltrosProyectos = {
      ciudad: this.ciudadesSeleccionadas.length > 0 ? this.ciudadesSeleccionadas : undefined,
      estado: this.estadosSeleccionados.length > 0 ? this.estadosSeleccionados : undefined,
      busqueda: this.busquedaControl.value || undefined
    };

    this.proyectos$ = this.proyectosService.obtenerProyectos(
      this.paginaActual,
      this.elementosPorPagina,
      filtros
    );

    this.proyectos$.subscribe((respuesta) => {
      this.totalProyectos = respuesta.paginacion.total;
      this.totalPaginas = respuesta.paginacion.totalPaginas;
      this.estaCargando = false;
    });
  }

  toggleCiudad(ciudad: CiudadProyecto): void {
    const index = this.ciudadesSeleccionadas.indexOf(ciudad);
    if (index === -1) {
      this.ciudadesSeleccionadas.push(ciudad);
    } else {
      this.ciudadesSeleccionadas.splice(index, 1);
    }
    this.paginaActual = 1;
    this.cargarProyectos();
  }

  toggleEstado(estado: EstadoProyecto): void {
    const index = this.estadosSeleccionados.indexOf(estado);
    if (index === -1) {
      this.estadosSeleccionados.push(estado);
    } else {
      this.estadosSeleccionados.splice(index, 1);
    }
    this.paginaActual = 1;
    this.cargarProyectos();
  }

  limpiarFiltros(): void {
    this.ciudadesSeleccionadas = [];
    this.estadosSeleccionados = [];
    this.busquedaControl.setValue('');
    this.paginaActual = 1;
    this.cargarProyectos();
  }

  cambiarPagina(pagina: number): void {
    if (pagina >= 1 && pagina <= this.totalPaginas) {
      this.paginaActual = pagina;
      this.cargarProyectos();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  verProyecto(id: string): void {
    this.router.navigate(['/proyectos', id]);
  }

  get paginas(): number[] {
    const paginas: number[] = [];
    const maxPaginasVisibles = 5;
    let inicio = Math.max(1, this.paginaActual - Math.floor(maxPaginasVisibles / 2));
    let fin = Math.min(this.totalPaginas, inicio + maxPaginasVisibles - 1);

    if (fin - inicio < maxPaginasVisibles - 1) {
      inicio = Math.max(1, fin - maxPaginasVisibles + 1);
    }

    for (let i = inicio; i <= fin; i++) {
      paginas.push(i);
    }
    return paginas;
  }

  get tieneFiltrosActivos(): boolean {
    const valorBusqueda = this.busquedaControl.value;
    return (
      this.ciudadesSeleccionadas.length > 0 ||
      this.estadosSeleccionados.length > 0 ||
      (valorBusqueda !== null && valorBusqueda.trim().length > 0)
    );
  }

  get totalResultados(): number {
    return this.totalProyectos;
  }
}
