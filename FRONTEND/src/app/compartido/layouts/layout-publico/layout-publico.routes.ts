import { Routes } from '@angular/router';
import { LayoutPublicoComponent } from './layout-publico.component';

export const RUTAS_LAYOUT_PUBLICO: Routes = [
  {
    path: '',
    component: LayoutPublicoComponent,
    children: [
      // Las rutas hijas se definen en app.routes.ts
    ]
  }
];
