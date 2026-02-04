import { Component } from '@angular/core';
import { Router, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlmacenamientoServicio } from '@nucleo/servicios';

@Component({
  selector: 'app-layout-administracion',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './layout-administracion.component.html',
  styleUrls: ['./layout-administracion.component.scss']
})
export class LayoutAdministracionComponent {
  constructor(
    private readonly router: Router,
    private readonly almacenamientoSvc: AlmacenamientoServicio
  ) {}

  cerrarSesion(): void {
    this.almacenamientoSvc.limpiarTodo();
    this.router.navigate(['/acceso']);
  }
}
