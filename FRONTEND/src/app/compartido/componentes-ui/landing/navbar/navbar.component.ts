import { Component, ElementRef, Renderer2, HostListener } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  esMenuAbierto = false;
  esScrolled = false;

  enlacesNav = [
    { path: '/inicio', etiqueta: 'Inicio' },
    { path: '/proyectos', etiqueta: 'Proyectos' },
    { path: '/nosotros', etiqueta: 'Nosotros' },
    { path: '/trayectoria', etiqueta: 'Trayectoria' }
  ];

  constructor(
    private router: Router,
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.esScrolled = window.scrollY > 20;
  }

  toggleMenu(): void {
    this.esMenuAbierto = !this.esMenuAbierto;
    if (this.esMenuAbierto) {
      this.renderer.addClass(document.body, 'menu-abierto');
    } else {
      this.renderer.removeClass(document.body, 'menu-abierto');
    }
  }

  cerrarMenu(): void {
    this.esMenuAbierto = false;
    this.renderer.removeClass(document.body, 'menu-abierto');
  }

  agendarVisita(): void {
    this.router.navigate(['/agendar-visita']);
    this.cerrarMenu();
  }

  navegarA(ruta: string): void {
    this.router.navigate([ruta]);
    this.cerrarMenu();
  }
}
