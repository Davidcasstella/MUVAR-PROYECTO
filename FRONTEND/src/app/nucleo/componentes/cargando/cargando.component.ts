import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cargando',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="cargando-contenedor">
      <div class="cargando-spinner"></div>
      <p class="cargando-texto">Cargando...</p>
    </div>
  `,
  styleUrls: ['./cargando.component.scss']
})
export class CargandoComponent {}
