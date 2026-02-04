import { Routes } from '@angular/router';

// ============================================
// RUTAS PRINCIPALES DE LA APLICACIÓN
// ============================================

export const RUTAS_APP: Routes = [
  // ============================================
  // RUTAS PÚBLICAS (Layout Público)
  // ============================================
  {
    path: '',
    loadComponent: () =>
      import('./compartido/layouts/layout-publico/layout-publico.component').then(
        (c) => c.LayoutPublicoComponent
      ),
    children: [
      {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
      },
      {
        path: 'inicio',
        loadComponent: () =>
          import('./funcionalidades/landing/inicio').then((c) => c.InicioComponent)
      },
      {
        path: 'proyectos',
        loadComponent: () =>
          import('./funcionalidades/landing/proyectos').then((c) => c.ProyectosComponent)
      },
      {
        path: 'proyectos/:id',
        loadComponent: () =>
          import('./funcionalidades/landing/proyecto-detalle').then(
            (c) => c.ProyectoDetalleComponent
          )
      },
      {
        path: 'nosotros',
        loadComponent: () =>
          import('./funcionalidades/landing/inicio').then((c) => c.InicioComponent)
      },
      {
        path: 'trayectoria',
        loadComponent: () =>
          import('./funcionalidades/landing/inicio').then((c) => c.InicioComponent)
      },
      {
        path: 'acceso',
        loadComponent: () =>
          import('./funcionalidades/autenticacion/acceso').then((c) => c.AccesoComponent)
      },
      {
        path: 'registro',
        loadComponent: () =>
          import('./funcionalidades/autenticacion/registro').then((c) => c.RegistroComponent)
      },
      {
        path: 'recuperar-password',
        loadComponent: () =>
          import('./funcionalidades/autenticacion/recuperar-password').then(
            (c) => c.RecuperarPasswordComponent
          )
      }
    ]
  },

  // ============================================
  // RUTAS PRIVADAS (Layout Administración)
  // ============================================
  {
    path: 'app',
    loadComponent: () =>
      import('./compartido/layouts/layout-administracion/layout-administracion.component').then(
        (c) => c.LayoutAdministracionComponent
      ),
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./funcionalidades/dashboard/inicio').then((c) => c.InicioComponent)
      },
      {
        path: 'usuarios',
        loadChildren: () =>
          import('./funcionalidades/usuarios').then((m) => m.USUARIOS_ROUTES)
      }
    ]
  },

  // ============================================
  // MANEJO DE ERRORES
  // ============================================
  {
    path: '403',
    loadComponent: () =>
      import('./nucleo/componentes').then((m) => m.SinPermisosComponent)
  },
  {
    path: '404',
    loadComponent: () =>
      import('./nucleo/componentes').then((m) => m.NoEncontradoComponent)
  },
  {
    path: '500',
    loadComponent: () =>
      import('./nucleo/componentes').then((m) => m.ErrorServidorComponent)
  },

  // ============================================
  // REDIRECCIÓN FINAL (Wildcard)
  // ============================================
  {
    path: '**',
    redirectTo: '404'
  }
];
