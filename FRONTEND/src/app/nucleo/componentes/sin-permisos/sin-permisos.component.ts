import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sin-permisos',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="sin-permisos-contenedor">
      <div class="sin-permisos-contenido">
        <div class="sin-permisos-icono">🔒</div>
        <h1 class="sin-permisos-titulo">Acceso denegado</h1>
        <p class="sin-permisos-mensaje">
          No tienes los permisos necesarios para acceder a esta página.
        </p>
        <button class="sin-permisos-boton" (click)="volver()">Volver atrás</button>
      </div>
    </div>
  `,
  styleUrls: ['./sin-permisos.component.scss']
})
export class SinPermisosComponent {
  constructor(private readonly router: Router) {}

  volver(): void {
    this.router.navigate(['..']);
  }
}
