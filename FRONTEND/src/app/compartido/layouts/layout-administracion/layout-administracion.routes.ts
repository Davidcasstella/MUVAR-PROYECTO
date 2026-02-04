import { Routes } from '@angular/router';
import { LayoutAdministracionComponent } from './layout-administracion.component';

export const RUTAS_LAYOUT_ADMINISTRACION: Routes = [
  {
    path: '',
    component: LayoutAdministracionComponent,
    children: [
      // Las rutas hijas se definen en app.routes.ts
    ]
  }
];
