import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-no-encontrado',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="no-encontrado-contenedor">
      <div class="no-encontrado-contenido">
        <h1 class="no-encontrado-codigo">404</h1>
        <h2 class="no-encontrado-titulo">Página no encontrada</h2>
        <p class="no-encontrado-mensaje">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        <button class="no-encontrado-boton" (click)="irInicio()">Volver al inicio</button>
      </div>
    </div>
  `,
  styleUrls: ['./no-encontrado.component.scss']
})
export class NoEncontradoComponent {
  constructor(private readonly router: Router) {}

  irInicio(): void {
    this.router.navigate(['/']);
  }
}
