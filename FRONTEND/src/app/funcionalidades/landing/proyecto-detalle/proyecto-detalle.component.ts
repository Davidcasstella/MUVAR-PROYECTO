import { Component, OnInit, inject, DestroyRef } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable, switchMap, of } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Proyecto, EstadoProyecto } from '@nucleo/modelos/proyecto.model';
import { ProyectosService } from '@nucleo/servicios/proyectos.service';
import { NavbarComponent } from '@compartido/componentes-ui/landing/navbar/navbar.component';
import { ProyectoCardComponent } from '@compartido/componentes-ui/landing/proyecto-card/proyecto-card.component';
import { WhatsappButtonComponent } from '@compartido/componentes-ui/landing/whatsapp-button/whatsapp-button.component';

@Component({
  selector: 'app-proyecto-detalle',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    ProyectoCardComponent,
    WhatsappButtonComponent
  ],
  templateUrl: './proyecto-detalle.component.html',
  styleUrls: ['./proyecto-detalle.component.scss']
})
export class ProyectoDetalleComponent implements OnInit {
  proyecto$!: Observable<Proyecto | undefined>;
  proyectosRelacionados$!: Observable<Proyecto[]>;
  imagenActivaIndex = 0;
  proyectoId!: string;
  estaCargando = true;
  estadoProyecto = EstadoProyecto;

  private destroyRef = inject(DestroyRef);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private proyectosService: ProyectosService
  ) {}

  ngOnInit(): void {
    this.proyectoId = this.route.snapshot.paramMap.get('id') || '';

    if (!this.proyectoId) {
      this.router.navigate(['/proyectos']);
      return;
    }

    this.cargarProyecto();
  }

  private cargarProyecto(): void {
    this.proyecto$ = this.proyectosService.obtenerProyectoPorId(this.proyectoId);

    this.proyecto$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((proyecto) => {
      if (!proyecto) {
        this.router.navigate(['/proyectos']);
        return;
      }
      this.estaCargando = false;
      this.cargarRelacionados();
    });
  }

  private cargarRelacionados(): void {
    this.proyectosRelacionados$ = this.proyectosService.obtenerProyectosRelacionados(
      this.proyectoId,
      3
    );
  }

  get imagenActiva(): string {
    let imagenUrl = '';
    this.proyecto$.subscribe((proyecto) => {
      if (proyecto && proyecto.imagenes[this.imagenActivaIndex]) {
        imagenUrl = proyecto.imagenes[this.imagenActivaIndex].url;
      }
    }).unsubscribe();
    return imagenUrl;
  }

  cambiarImagen(index: number): void {
    this.imagenActivaIndex = index;
  }

  imagenSiguiente(): void {
    this.proyecto$.subscribe((proyecto) => {
      if (proyecto) {
        this.imagenActivaIndex = (this.imagenActivaIndex + 1) % proyecto.imagenes.length;
      }
    }).unsubscribe();
  }

  imagenAnterior(): void {
    this.proyecto$.subscribe((proyecto) => {
      if (proyecto) {
        this.imagenActivaIndex =
          (this.imagenActivaIndex - 1 + proyecto.imagenes.length) % proyecto.imagenes.length;
      }
    }).unsubscribe();
  }

  agendarVisita(): void {
    this.router.navigate(['/agendar-visita'], { queryParams: { proyecto: this.proyectoId } });
  }

  getEstadoClase(estado: EstadoProyecto): string {
    const clases: Record<EstadoProyecto, string> = {
      [EstadoProyecto.EN_CONSTRUCCION]: 'en-construccion',
      [EstadoProyecto.PREVENTA]: 'preventa',
      [EstadoProyecto.ENTREGADO]: 'entregado',
      [EstadoProyecto.VENDIDO]: 'vendido'
    };
    return clases[estado];
  }

  getEstadoEtiqueta(estado: EstadoProyecto): string {
    return ProyectosService.obtenerEtiquetaEstado(estado);
  }

  formatearPrecio(precio: number): string {
    return ProyectosService.formatearPrecio(precio);
  }

  navegarAProyecto(id: string): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { id },
      queryParamsHandling: 'merge'
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
