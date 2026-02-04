import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Proyecto } from '@nucleo/modelos/proyecto.model';
import { ProyectosService } from '@nucleo/servicios/proyectos.service';
import { NavbarComponent } from '@compartido/componentes-ui/landing/navbar/navbar.component';
import { ProyectoCardComponent } from '@compartido/componentes-ui/landing/proyecto-card/proyecto-card.component';
import { WhatsappButtonComponent } from '@compartido/componentes-ui/landing/whatsapp-button/whatsapp-button.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, NavbarComponent, ProyectoCardComponent, WhatsappButtonComponent],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  proyectosDestacados$!: Observable<Proyecto[]>;
  estaCargando = true;

  constructor(
    private router: Router,
    private proyectosService: ProyectosService
  ) {}

  ngOnInit(): void {
    this.cargarProyectosDestacados();
  }

  private cargarProyectosDestacados(): void {
    this.proyectosDestacados$ = this.proyectosService.obtenerProyectosDestacados();
    this.estaCargando = false;
  }

  verProyecto(id: string): void {
    this.router.navigate(['/proyectos', id]);
  }

  verTodosLosProyectos(): void {
    this.router.navigate(['/proyectos']);
  }

  agendarVisita(): void {
    this.router.navigate(['/agendar-visita']);
  }

  scrollToContacto(): void {
    // Implementar scroll a sección de contacto si existe
    this.agendarVisita();
  }
}
