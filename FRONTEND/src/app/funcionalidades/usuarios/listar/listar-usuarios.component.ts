import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-usuarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.scss']
})
export class ListarUsuariosComponent {
  usuarios = [
    { id: 1, nombre: 'Juan Pérez', email: 'juan@example.com', rol: 'Administrador', estado: 'Activo' },
    { id: 2, nombre: 'María García', email: 'maria@example.com', rol: 'Operador', estado: 'Activo' },
    { id: 3, nombre: 'Carlos López', email: 'carlos@example.com', rol: 'Visualizador', estado: 'Inactivo' }
  ];

  columns = ['Nombre', 'Email', 'Rol', 'Estado', 'Acciones'];
}
