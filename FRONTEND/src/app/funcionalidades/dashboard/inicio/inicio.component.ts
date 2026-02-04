import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {
  estadisticas = [
    { titulo: 'Usuarios Totales', valor: '1,234', icono: '👥', color: 'var(--color-primario)' },
    { titulo: 'Sesiones Activas', valor: '56', icono: '🟢', color: 'var(--color-exito)' },
    { titulo: 'Nuevos Hoy', valor: '12', icono: '📈', color: 'var(--color-advertencia)' },
    { titulo: 'Ingresos Mes', valor: '$45.2K', icono: '💰', color: 'var(--color-info)' }
  ];
}
