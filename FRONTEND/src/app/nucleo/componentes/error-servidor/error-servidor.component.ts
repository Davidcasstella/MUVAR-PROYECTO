import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-error-servidor',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="error-servidor-contenedor">
      <div class="error-servidor-contenido">
        <div class="error-servidor-icono">⚠️</div>
        <h1 class="error-servidor-titulo">Error del servidor</h1>
        <p class="error-servidor-mensaje">
          Ha ocurrido un error inesperado. Por favor, inténtalo de nuevo más tarde.
        </p>
        <button class="error-servidor-boton" (click)="recargar()">Recargar página</button>
      </div>
    </div>
  `,
  styleUrls: ['./error-servidor.component.scss']
})
export class ErrorServidorComponent {
  recargar(): void {
    window.location.reload();
  }
}
