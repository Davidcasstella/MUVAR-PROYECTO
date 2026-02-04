import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Proyecto, EstadoProyecto } from '@nucleo/modelos/proyecto.model';
import { ProyectosService } from '@nucleo/servicios/proyectos.service';

@Component({
  selector: 'app-proyecto-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyecto-card.component.html',
  styleUrls: ['./proyecto-card.component.scss']
})
export class ProyectoCardComponent {
  @Input() proyecto!: Proyecto;
  @Input() layout: 'grid' | 'list' = 'grid';
  @Output() cardClick = new EventEmitter<string>();

  constructor(private router: Router) {}

  get imagenPrincipal(): string {
    return this.proyecto.imagenes.find((img) => img.esPrincipal)?.url || this.proyecto.imagenes[0]?.url || '';
  }

  get estadoClase(): string {
    const clases: Record<EstadoProyecto, string> = {
      [EstadoProyecto.EN_CONSTRUCCION]: 'en-construccion',
      [EstadoProyecto.PREVENTA]: 'preventa',
      [EstadoProyecto.ENTREGADO]: 'entregado',
      [EstadoProyecto.VENDIDO]: 'vendido'
    };
    return clases[this.proyecto.estado];
  }

  get estadoEtiqueta(): string {
    return ProyectosService.obtenerEtiquetaEstado(this.proyecto.estado);
  }

  get precioFormateado(): string {
    return ProyectosService.formatearPrecio(this.proyecto.precios.rango.desde);
  }

  verProyecto(): void {
    this.cardClick.emit(this.proyecto.id);
    this.router.navigate(['/proyectos', this.proyecto.id]);
  }
}
