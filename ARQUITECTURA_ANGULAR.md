# 🏗️ ARQUITECTURA ANGULAR ENTERPRISE - MUVAR
## Versión Angular 19+ | Standalone Components | Signals | TypeScript 5.7+

---

## 📋 ÍNDICE
1. [Estructura General](#1-estructura-general)
2. [Organización Interna](#2-organización-interna)
3. [Sistema de Rutas Profesional](#3-sistema-de-rutas-profesional)
4. [Arquitectura Técnica](#4-arquitectura-técnica)
5. [Estándares de Código](#5-estándares-de-código)
6. [Escalabilidad Futura](#6-escalabilidad-futura)

---

## 1. ESTRUCTURA GENERAL

```
FRONTEND/
│
├── 📁 src/
│   ├── 📁 app/
│   │   │
│   │   ├── 📁 nucleo/                           # CORE: Funcionalidades base inmutables
│   │   │   ├── 📁 interceptores/
│   │   │   │   ├── autenticacion.interceptor.ts
│   │   │   │   ├── cabeceras.interceptor.ts
│   │   │   │   ├── errores.interceptor.ts
│   │   │   │   ├── carga.interceptor.ts
│   │   │   │   └── index.ts
│   │   │   │
│   │   │   ├── 📁 guardias/
│   │   │   │   ├── autenticacion.guardia.ts
│   │   │   │   ├── permisos.guardia.ts
│   │   │   │   └── index.ts
│   │   │   │
│   │   │   ├── 📁 servicios/
│   │   │   │   ├── navegador.servicio.ts
│   │   │   │   ├── almacenamiento.servicio.ts
│   │   │   │   ├── notificaciones.servicio.ts
│   │   │   │   └── index.ts
│   │   │   │
│   │   │   ├── 📁 directivas/
│   │   │   │   ├── tiene-permiso.directiva.ts
│   │   │   │   ├── autenticado.directiva.ts
│   │   │   │   ├── carga-directiva.ts
│   │   │   │   └── index.ts
│   │   │   │
│   │   │   ├── 📁 pipes/
│   │   │   │   ├── fecha.pipe.ts
│   │   │   │   ├── moneda.pipe.ts
│   │   │   │   ├── seguro.pipe.ts
│   │   │   │   └── index.ts
│   │   │   │
│   │   │   ├── 📁 modelos/
│   │   │   │   ├── respuesta-api.interface.ts
│   │   │   │   ├── paginacion.interface.ts
│   │   │   │   ├── error-api.interface.ts
│   │   │   │   └── index.ts
│   │   │   │
│   │   │   ├── 📁 componentes/
│   │   │   │   ├── cargando/
│   │   │   │   │   ├── cargando.component.ts
│   │   │   │   │   ├── cargando.component.scss
│   │   │   │   │   └── cargando.component.spec.ts
│   │   │   │   ├── sin-permisos/
│   │   │   │   ├── no-encontrado/
│   │   │   │   └── error-servidor/
│   │   │   │
│   │   │   └── 📁 utilidades/
│   │   │       ├── constantes.ts
│   │   │       ├── enumeraciones.ts
│   │   │       ├── validadores.ts
│   │   │       └── index.ts
│   │   │
│   │   ├── 📁 compartido/                       # SHARED: Componentes y UI reutilizables
│   │   │   │
│   │   │   ├── 📁 componentes-ui/
│   │   │   │   ├── 📁 botones/
│   │   │   │   │   ├── boton-principal/
│   │   │   │   │   ├── boton-secundario/
│   │   │   │   │   ├── boton-peligro/
│   │   │   │   │   └── index.ts
│   │   │   │   ├── 📁 entradas/
│   │   │   │   │   ├── entrada-texto/
│   │   │   │   │   ├── entrada-email/
│   │   │   │   │   ├── entrada-password/
│   │   │   │   │   └── index.ts
│   │   │   │   ├── 📁 tarjetas/
│   │   │   │   ├── 📁 tablas/
│   │   │   │   ├── 📁 modales/
│   │   │   │   ├── 📁 notificaciones/
│   │   │   │   ├── 📁 seleccionadores/
│   │   │   │   └── index.ts
│   │   │   │
│   │   │   ├── 📁 layouts/
│   │   │   │   ├── 📁 layout-publico/
│   │   │   │   │   ├── layout-publico.component.ts
│   │   │   │   │   ├── layout-publico.component.scss
│   │   │   │   │   ├── layout-publico.component.html
│   │   │   │   │   └── index.ts
│   │   │   │   ├── 📁 layout-administracion/
│   │   │   │   │   ├── layout-administracion.component.ts
│   │   │   │   │   ├── layout-administracion.component.scss
│   │   │   │   │   ├── layout-administracion.component.html
│   │   │   │   │   └── index.ts
│   │   │   │   └── index.ts
│   │   │   │
│   │   │   ├── 📁 directivas/
│   │   │   │   ├── enfocable.directiva.ts
│   │   │   │   ├── solonumeros.directiva.ts
│   │   │   │   └── index.ts
│   │   │   │
│   │   │   └── 📁 pipes/
│   │   │       ├── truncar.pipe.ts
│   │   │       ├── capitalizar.pipe.ts
│   │   │       └── index.ts
│   │   │
│   │   ├── 📁 funcionalidades/                  # FEATURES: Módulos de negocio independientes
│   │   │   │
│   │   │   ├── 📁 autenticacion/
│   │   │   │   ├── 📁 acceso/
│   │   │   │   │   ├── acceso.component.ts
│   │   │   │   │   ├── acceso.component.html
│   │   │   │   │   ├── acceso.component.scss
│   │   │   │   │   ├── acceso.routes.ts
│   │   │   │   │   └── index.ts
│   │   │   │   ├── 📁 registro/
│   │   │   │   │   ├── registro.component.ts
│   │   │   │   │   ├── registro.component.html
│   │   │   │   │   ├── registro.component.scss
│   │   │   │   │   └── index.ts
│   │   │   │   ├── 📁 recuperar-password/
│   │   │   │   ├── 📁 servicios/
│   │   │   │   │   ├── autenticacion.servicio.ts
│   │   │   │   │   ├── token.servicio.ts
│   │   │   │   │   └── index.ts
│   │   │   │   ├── 📁 modelos/
│   │   │   │   │   ├── credenciales.interface.ts
│   │   │   │   │   ├── respuesta-autenticacion.interface.ts
│   │   │   │   │   └── index.ts
│   │   │   │   ├── 📁 almacenes/
│   │   │   │   │   ├── autenticacion.almacen.ts
│   │   │   │   │   └── index.ts
│   │   │   │   ├── 📁 guards/
│   │   │   │   │   ├── no-autenticado.guardia.ts
│   │   │   │   │   └── index.ts
│   │   │   │   ├── autenticacion.routes.ts
│   │   │   │   └── index.ts
│   │   │   │
│   │   │   ├── 📁 dashboard/
│   │   │   │   ├── 📁 inicio/
│   │   │   │   │   ├── inicio.component.ts
│   │   │   │   │   ├── inicio.component.html
│   │   │   │   │   ├── inicio.component.scss
│   │   │   │   │   └── index.ts
│   │   │   │   ├── 📁 estadisticas/
│   │   │   │   ├── 📁 servicios/
│   │   │   │   ├── 📁 modelos/
│   │   │   │   ├── dashboard.routes.ts
│   │   │   │   └── index.ts
│   │   │   │
│   │   │   ├── 📁 usuarios/
│   │   │   │   ├── 📁 listar/
│   │   │   │   │   ├── listar-usuarios.component.ts
│   │   │   │   │   ├── listar-usuarios.component.html
│   │   │   │   │   ├── listar-usuarios.component.scss
│   │   │   │   │   └── index.ts
│   │   │   │   ├── 📁 crear/
│   │   │   │   │   ├── crear-usuario.component.ts
│   │   │   │   │   ├── crear-usuario.component.html
│   │   │   │   │   ├── crear-usuario.component.scss
│   │   │   │   │   └── index.ts
│   │   │   │   ├── 📁 editar/
│   │   │   │   │   ├── editar-usuario.component.ts
│   │   │   │   │   ├── editar-usuario.component.html
│   │   │   │   │   ├── editar-usuario.component.scss
│   │   │   │   │   └── index.ts
│   │   │   │   ├── 📁 detalle/
│   │   │   │   ├── 📁 servicios/
│   │   │   │   │   ├── usuarios.api.servicio.ts
│   │   │   │   │   ├── usuarios.servicio.ts
│   │   │   │   │   └── index.ts
│   │   │   │   ├── 📁 modelos/
│   │   │   │   │   ├── usuario.interface.ts
│   │   │   │   │   ├── crear-usuario.dto.ts
│   │   │   │   │   ├── actualizar-usuario.dto.ts
│   │   │   │   │   └── index.ts
│   │   │   │   ├── 📁 almacenes/
│   │   │   │   │   ├── usuarios.almacen.ts
│   │   │   │   │   └── index.ts
│   │   │   │   ├── usuarios.routes.ts
│   │   │   │   └── index.ts
│   │   │   │
│   │   │   └── 📁 [otras-funcionalidades]/
│   │   │
│   │   ├── 📁 disenos/                         # DESIGNS: Themes, estilos globales
│   │   │   ├── 📁 temas/
│   │   │   │   ├── tema-claro/
│   │   │   │   │   ├── _variables.scss
│   │   │   │   │   └── index.scss
│   │   │   │   ├── tema-oscuro/
│   │   │   │   │   ├── _variables.scss
│   │   │   │   │   └── index.scss
│   │   │   │   └── index.ts
│   │   │   ├── 📁 animaciones/
│   │   │   │   ├── desvanecer.ts
│   │   │   │   ├── deslizar.ts
│   │   │   │   └── index.ts
│   │   │   └── 📁 estilos-base/
│   │   │       ├── _reset.scss
│   │   │       ├── _tipografia.scss
│   │   │       ├── _espaciado.scss
│   │   │       └── index.scss
│   │   │
│   │   ├── app.config.ts                       # Configuración standalone
│   │   ├── app.routes.ts                       # Rutas principales
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   └── app.component.spec.ts
│   │
│   ├── 📁 assets/
│   │   ├── 📁 imagenes/
│   │   │   ├── logo.png
│   │   │   ├── favicon.ico
│   │   │   └── avatar-por-defecto.png
│   │   ├── 📁 iconos/
│   │   ├── 📁 fuentes/
│   │   └── 📁 i18n/                            # Internacionalización
│   │       ├── es.json
│   │       └── en.json
│   │
│   ├── 📁 entornos/
│   │   ├── entorno.desarrollo.ts
│   │   ├── entorno.pruebas.ts
│   │   ├── entorno.preproduccion.ts
│   │   └── entorno.produccion.ts
│   │
│   ├── 📁 estilos/
│   │   ├── estilos.scss
│   │   └── variables-globales.scss
│   │
│   ├── index.html
│   ├── main.ts
│   └── test.ts
│
├── 📄 angular.json
├── 📄 tsconfig.json
├── 📄 tsconfig.app.json
├── 📄 tsconfig.spec.json
├── 📄 package.json
├── 📄 package-lock.json
├── 📄 .eslintrc.json
├── 📄 .prettierrc
├── 📄 .editorconfig
├── 📄 .gitignore
├── 📄 README.md
└── 📄 CHANGELOG.md
```

---

## 2. ORGANIZACIÓN INTERNA

### 🎯 NÚCLEO (CORE)

**Propósito**: Funcionalidades base, inmutables, transversales a toda la aplicación.

**Características**:
- ✅ NO depende de otros módulos de la aplicación
- ✅ Es importado por todos los demás módulos
- ✅ Contiene servicios singleton globales
- ✅ Implementa interceptores HTTP
- ✅ Define guardias de autenticación/autorización
- ✅ Componentes para estados globales (404, 500, loading)

**Qué contiene**:

```typescript
// nucleo/interceptores/autenticacion.interceptor.ts
@Injectable({ providedIn: 'root' })
export class AutenticacionInterceptor implements HttpInterceptor {
  constructor(
    private tokenSvc: TokenServicio,
    private router: Router
  ) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.tokenSvc.obtenerToken();

    if (token) {
      const reqAutenticada = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
          'X-Tenant-ID': this.obtenerTenantId()
        }
      });
      return next.handle(reqAutenticada);
    }

    return next.handle(req);
  }
}
```

```typescript
// nucleo/servicios/almacenamiento.servicio.ts
@Injectable({ providedIn: 'root' })
export class AlmacenamientoServicio {
  private readonly CLAVE_TOKEN = 'muvar_token';
  private readonly CLAVE_USUARIO = 'muvar_usuario';
  private readonly CLAVE_TEMA = 'muvar_tema';

  constructor(@Inject(LOCAL_STORAGE) private localStorage: Storage) {}

  guardarToken(token: string): void {
    this.localStorage.setItem(this.CLAVE_TOKEN, token);
  }

  obtenerToken(): string | null {
    return this.localStorage.getItem(this.CLAVE_TOKEN);
  }

  limpiarToken(): void {
    this.localStorage.removeItem(this.CLAVE_TOKEN);
  }

  // ... más métodos
}
```

---

### 🔄 COMPARTIDO (SHARED)

**Propósito**: Componentes UI reutilizables, layouts, directivas y pipes compartidos.

**Características**:
- ✅ Componentes puros de presentación
- ✅ Deben ser agnósticos a la lógica de negocio
- ✅ Usan `@Input()` y `@Output()` para comunicación
- ✅ NO inyectan servicios de negocio
- ✅ Reutilizables en cualquier funcionalidad

**Ejemplo de componente UI compartido**:

```typescript
// compartido/componentes-ui/botones/boton-principal/boton-principal.component.ts
@Component({
  selector: 'app-boton-principal',
  standalone: true,
  imports: [NgClass],
  templateUrl: './boton-principal.component.html',
  styleUrls: ['./boton-principal.component.scss']
})
export class BotonPrincipalComponent {
  @Input() texto = '';
  @Input() deshabilitado = false;
  @Input() tipo: 'submit' | 'button' = 'button';
  @Input() clasePersonalizada = '';
  @Output() clickeado = new EventEmitter<void>();

  alClickear(): void {
    if (!this.deshabilitado) {
      this.clickeado.emit();
    }
  }
}
```

---

### 🚀 FUNCIONALIDADES (FEATURES)

**Propósito**: Módulos de negocio independientes y auto-contenidos.

**Reglas de oro**:
1. ✅ Cada funcionalidad es un módulo autónomo
2. ✅ Puede tener sus propias rutas hijas
3. ✅ Tiene sus propios servicios, modelos, componentes
4. ✅ Usa lazy loading para carga diferida
5. ✅ NO debe importar desde otras funcionalidades (solo compartido/nucleo)
6. ✅ Comunicación entre funcionalidades vía servicios del núcleo

**Estructura de una funcionalidad (ej: Usuarios)**:

```typescript
// funcionalidades/usuarios/index.ts
// Barrel export para imports limpios
export * from './usuarios.routes';
export * from './servicios';
export * from './modelos';
export * from './almacenes';
```

```typescript
// funcionalidades/usuarios/servicios/usuarios.api.servicio.ts
@Injectable({ providedIn: 'root' })
export class UsuariosApiServicio {
  private readonly URL_BASE = '/api/v1/usuarios';

  constructor(private http: HttpClient) {}

  listar(paginacion: PaginacionParams): Observable<PaginacionRespuesta<Usuario>> {
    return this.http.get<PaginacionRespuesta<Usuario>>(this.URL_BASE, {
      params: this.construirParams(paginacion)
    });
  }

  crear(dto: CrearUsuarioDto): Observable<Usuario> {
    return this.http.post<Usuario>(this.URL_BASE, dto);
  }

  actualizar(id: string, dto: ActualizarUsuarioDto): Observable<Usuario> {
    return this.http.patch<Usuario>(`${this.URL_BASE}/${id}`, dto);
  }

  eliminar(id: string): Observable<void> {
    return this.http.delete<void>(`${this.URL_BASE}/${id}`);
  }

  private construirParams(paginacion: PaginacionParams): HttpParams {
    return new HttpParams()
      .set('pagina', paginacion.pagina.toString())
      .set('limite', paginacion.limite.toString());
  }
}
```

```typescript
// funcionalidades/usuarios/almacenes/usuarios.almacen.ts
@Injectable({ providedIn: 'root' })
export class UsuariosAlmacen {
  private readonly estado = signalState<EstadoUsuarios>({
    usuarios: [],
    cargando: false,
    error: null,
    filtros: { busqueda: '', rol: '' },
    paginacion: { pagina: 1, limite: 10, total: 0 }
  });

  readonly usuarios = this.estado.usuarios;
  readonly cargando = this.estado.cargando;
  readonly error = this.estado.error;

  constructor(private apiSvc: UsuariosApiServicio) {}

  cargarUsuarios(): void {
    patchState(this.estado, { cargando: true, error: null });

    this.apiSvc
      .listar(this.estado.paginacion())
      .pipe(
        tap((respuesta) => {
          patchState(this.estado, {
            usuarios: respuesta.datos,
            paginacion: {
              ...this.estado.paginacion(),
              total: respuesta.total
            },
            cargando: false
          });
        }),
        catchError((error) => {
          patchState(this.estado, {
            error: error.mensaje,
            cargando: false
          });
          return EMPTY;
        })
      )
      .subscribe();
  }

  eliminarUsuario(id: string): void {
    this.apiSvc
      .eliminar(id)
      .pipe(
        tap(() => this.cargarUsuarios()),
        catchError((error) => {
          patchState(this.estado, { error: error.mensaje });
          return EMPTY;
        })
      )
      .subscribe();
  }
}
```

---

### 🎨 DISEÑOS (DESIGNS)

**Propósito**: Gestión de temas, animaciones y estilos globales.

**Características**:
- ✅ Variables CSS/SCSS globales
- ✅ Sistema de temas (claro/oscuro/personalizado)
- ✅ Animaciones reutilizables
- ✅ Tipografía y espaciado consistente

**Sistema de temas con Signals**:

```typescript
// disenos/temas/index.ts
export type Tema = 'claro' | 'oscuro' | 'sistema';

@Injectable({ providedIn: 'root' })
export class GestorTemas {
  private readonly temaActual = signal<Tema>('sistema');
  private readonly mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  readonly tema = computed(() => {
    const tema = this.temaActual();
    if (tema === 'sistema') {
      return this.mediaQuery.matches ? 'oscuro' : 'claro';
    }
    return tema;
  });

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.escucharPreferenciasSistema();
  }

  establecerTema(tema: Tema): void {
    this.temaActual.set(tema);
    this.aplicarTema(this.tema());
  }

  private aplicarTema(tema: string): void {
    const claseTema = tema === 'oscuro' ? 'tema-oscuro' : 'tema-claro';
    this.document.documentElement.classList.add(claseTema);
    this.document.documentElement.setAttribute('data-tema', tema);
  }

  private escucharPreferenciasSistema(): void {
    this.mediaQuery.addEventListener('change', () => {
      if (this.temaActual() === 'sistema') {
        this.aplicarTema(this.tema());
      }
    });
  }
}
```

---

## 3. SISTEMA DE RUTAS PROFESIONAL

### 📋 Estrategia de enrutamiento

```typescript
// app.routes.ts
export const RUTAS_APP: Routes = [
  // ============================================
  // RUTAS PÚBLICAS (Layout Público)
  // ============================================
  {
    path: '',
    loadChildren: () =>
      import('./compartido/layouts').then((m) => m.LAYOUT_PUBLICO_ROUTES),
    children: [
      {
        path: '',
        redirectTo: 'acceso',
        pathMatch: 'full'
      },
      {
        path: 'acceso',
        loadComponent: () =>
          import('./funcionalidades/autenticacion').then((m) => m.AccesoComponent)
      },
      {
        path: 'registro',
        loadComponent: () =>
          import('./funcionalidades/autenticacion').then((m) => m.RegistroComponent)
      },
      {
        path: 'recuperar-password',
        loadComponent: () =>
          import('./funcionalidades/autenticacion').then((m) => m.RecuperarPasswordComponent)
      }
    ]
  },

  // ============================================
  // RUTAS PRIVADAS (Layout Administración)
  // ============================================
  {
    path: 'app',
    loadChildren: () =>
      import('./compartido/layouts').then((m) => m.LAYOUT_ADMINISTRACION_ROUTES),
    canActivate: [() => inject(AutenticacionGuardia).puedeActivar()],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./funcionalidades/dashboard').then((m) => m.InicioComponent),
        canActivate: [() => inject(PermisosGuardia).tienePermiso('dashboard.ver')]
      },
      {
        path: 'usuarios',
        loadChildren: () =>
          import('./funcionalidades/usuarios').then((m) => m.USUARIOS_ROUTES),
        canActivate: [() => inject(PermisosGuardia).tienePermiso('usuarios.ver')]
      },
      // ... más funcionalidades
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

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(RUTAS_APP, withComponentInputBinding(), withViewTransitions())
  ]
});
```

### 📁 Rutas hijas por funcionalidad

```typescript
// funcionalidades/usuarios/usuarios.routes.ts
export const USUARIOS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./listar').then((m) => m.ListarUsuariosComponent)
  },
  {
    path: 'crear',
    loadComponent: () =>
      import('./crear').then((m) => m.CrearUsuarioComponent),
    canActivate: [() => inject(PermisosGuardia).tienePermiso('usuarios.crear')]
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./detalle').then((m) => m.DetalleUsuarioComponent)
  },
  {
    path: ':id/editar',
    loadComponent: () =>
      import('./editar').then((m) => m.EditarUsuarioComponent),
    canActivate: [() => inject(PermisosGuardia).tienePermiso('usuarios.editar')]
  }
];
```

### 🛡️ Guardias mejoradas con funciones

```typescript
// nucleo/guardias/autenticacion.guardia.ts
export const autenticacionGuardia = (): CanActivateFn => {
  return () => {
    const authSvc = inject(AutenticacionServicio);
    const router = inject(Router);

    if (!authSvc.estaAutenticado()) {
      router.navigate(['/acceso'], {
        queryParams: { redirigir: router.url }
      });
      return false;
    }

    return true;
  };
};

// Uso en rutas
{
  path: 'dashboard',
  loadComponent: () => import('./dashboard').then(m => m.DashboardComponent),
  canActivate: [autenticacionGuardia]
}
```

---

## 4. ARQUITECTURA TÉCNICA

### ✅ Decisión: Standalone Components

**Por qué Standandalone Components**:
- ✅ Módulos Angular tradicionales están en desuso
- ✅ Mejor rendimiento (tree-shaking optimizado)
- ✅ Menos boilerplate
- ✅ Más fácil de mantener y escalar
- ✅ Composición explícita de dependencias
- ✅ Mejor para aplicaciones enterprise

**Configuración**:

```typescript
// app.config.ts
export const appConfig: ApplicationConfig = {
  providers: [
    // Router con funcionalidades avanzadas
    provideRouter(
      RUTAS_APP,
      withComponentInputBinding(),    // Inputs desde route params
      withViewTransitions(),           // Transiciones nativas
      withDebugTracingEnabled(false)
    ),

    // HttpClient con interceptores encadenados
    provideHttpClient(
      withInterceptors([
        interceptorCarga,
        interceptorAutenticacion,
        interceptorCabeceras,
        interceptorErrores,
        interceptorRegistros
      ])
    ),

    // Animaciones
    provideAnimations(),

    // Servicios del núcleo
    AlmacenamientoServicio,
    AutenticacionServicio,
    NotificacionesServicio,

    // Gestión de errores
    {
      provide: ErrorHandler,
      useClass: ManejadorErroresGlobal
    }
  ]
};
```

### 🔄 Manejo de Estado: Signals + NgRx Signal Store

**Arquitectura híbrida recomendada**:

```typescript
// Para estado local/simple: Angular Signals
@Component({...})
export class ListarUsuariosComponent {
  private usuariosSvc = inject(UsuariosServicio);

  pagina = signal(1);
  busqueda = signal('');

  usuarios = toSignal(
    combineLatest([this.pagina, this.busqueda]).pipe(
      switchMap(([pag, busq]) =>
        this.usuariosSvc.listar({ pagina: pag, busqueda: busq })
      )
    ),
    { initialValue: [] }
  );
}

// Para estado complejo/global: NgRx Signal Store
@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'autenticacion' })
export class AutenticacionStore extends ComponentStore<EstadoAutenticacion> {
  constructor(private apiSvc: AutenticacionApiServicio) {
    super({
      usuario: null,
      token: null,
      estaAutenticado: false,
      permisos: [],
      cargando: false
    });
  }

  readonly iniciarSesion = this.effect<Credenciales>((credenciales$) => {
    return credenciales$.pipe(
      tap(() => this.patchState({ cargando: true })),
      switchMap((credenciales) =>
        this.apiSvc.iniciarSesion(credenciales).pipe(
          tapResponse({
            next: (respuesta) => {
              this.patchState({
                usuario: respuesta.usuario,
                token: respuesta.token,
                estaAutenticado: true,
                permisos: respuesta.permisos,
                cargando: false
              });
            },
            error: (error) => {
              this.patchState({ cargando: false });
              // Manejar error
            }
          })
        )
      )
    );
  });
}
```

### 🌐 Interceptor HTTP Base

```typescript
// nucleo/interceptores/carga.interceptor.ts
export const interceptorCarga: HttpInterceptorFn = (req, next) => {
  const cargaSvc = inject(CargaServicio);
  const clave = req.url + req.method;

  cargaSvc.iniciar(clave);

  return next(req).pipe(
    finalize(() => cargaSvc.finalizar(clave))
  );
};

// nucleo/interceptores/errores.interceptor.ts
export const interceptorErrores: HttpInterceptorFn = (req, next) => {
  const notificacionesSvc = inject(NotificacionesServicio);
  const router = inject(Router);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        router.navigate(['/acceso']);
        notificacionesSvc.mostrarError('Sesión expirada');
      } else if (error.status === 403) {
        router.navigate(['/403']);
        notificacionesSvc.mostrarError('Sin permisos');
      } else if (error.status >= 500) {
        router.navigate(['/500']);
        notificacionesSvc.mostrarError('Error del servidor');
      } else {
        notificacionesSvc.mostrarError(error.error?.mensaje || 'Error desconocido');
      }

      return throwError(() => error);
    })
  );
};
```

### 🚨 Manejo Global de Errores

```typescript
// nucleo/servicios/manejador-errores.ts
@Injectable({ providedIn: 'root' })
export class ManejadorErroresGlobal implements ErrorHandler {
  constructor(
    private notificacionesSvc: NotificacionesServicio,
    private registroSvc: RegistroServicio
  ) {}

  handleError(error: Error): void {
    // Registrar en servicio de logging
    this.registroSvc.registrarError(error);

    // Errores de Angular
    if (error instanceof Error) {
      console.group('❌ Error capturado');
      console.error(error.message);
      console.error(error.stack);
      console.groupEnd();

      this.notificacionesSvc.mostrarError(
        'Ha ocurrido un error inesperado'
      );
    }

    // Errores de HTTP ya manejados en el interceptor
    if (error instanceof HttpErrorResponse) {
      return; // Ya manejado en interceptorErrores
    }
  }
}
```

---

## 5. ESTÁNDARES DE CÓDIGO

### 📝 Convenciones de Nomenclatura

| Tipo | Convención | Ejemplo |
|------|------------|---------|
| **Componentes** | PascalCase + sufijo `Component` | `ListarUsuariosComponent` |
| **Servicios** | PascalCase + sufijo `Servicio` | `AutenticacionServicio` |
| **Guardias** | PascalCase + sufijo `Guardia` | `AutenticacionGuardia` |
| **Interceptores** | PascalCase + sufijo `Interceptor` | `TokenInterceptor` |
| **Directivas** | PascalCase + sufijo `Directiva` | `TienePermisoDirectiva` |
| **Pipes** | PascalCase + sufijo `Pipe` | `FechaPipe` |
| **Interfaces** | PascalCase + sufijo `Interface` (opcional) | `UsuarioInterface` o `Usuario` |
| **DTOs** | PascalCase + sufijo `Dto` | `CrearUsuarioDto` |
| **Models/Types** | PascalCase | `TipoUsuario`, `EstadoAutenticacion` |
| **Enums** | PascalCase | `RolUsuario` |
| **Constantes** | SCREAMING_SNAKE_CASE | `URL_BASE_API`, `LIMITE_PAGINACION` |
| **Variables/Métodos** | camelCase | `listarUsuarios()`, `estaAutenticado` |
| **Privados** | camelCase + prefijo `_` (opcional) | `_cargarDatos()`, `_estadoInterno` |
| **Observables** | camelCase + sufijo `$` | `usuarios$`, `cambiosPagina$` |
| **Signals** | camelCase | `usuarios`, `pagina` |
| **Archivos** | kebab-case | `listar-usuarios.component.ts` |
| **Carpetas** | kebab-case | `autenticacion/`, `lista-usuarios/` |

### 🗂️ Organización de Archivos

**Estructura por componente**:

```
listar-usuarios/
├── listar-usuarios.component.ts      # Lógica del componente
├── listar-usuarios.component.html    # Template
├── listar-usuarios.component.scss    # Estilos específicos
├── listar-usuarios.component.spec.ts # Tests
└── index.ts                          # Export pública (opcional)
```

**Imports ordenados (regla de 3 grupos)**:

```typescript
// 1. Dependencias externas
import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { Observable } from 'rxjs';

// 2. Dependencias internas (mismo proyecto)
import { BotonPrincipalComponent } from '@compartido/componentes-ui';
import { AutenticacionServicio } from '@nucleo/servicios';
import { Usuario } from '@funcionalidades/usuarios/modelos';

// 3. Estilos y assets
import './listar-usuarios.component.scss';
import iconoUsuario from '@assets/iconos/usuario.svg';
```

### 🎨 Organización SCSS

```
estilos/
├── estilos.scss                       # Entry point (imports todo)
├── variables-globales.scss            # Variables globales
└── @abstractos/
    ├── _variables.scss                # Colors, spacing, fonts
    ├── _mixins.scss                   # Reusable mixins
    ├── _funciones.scss                # SCSS functions
    └── _placeholders.scss             # %placeholders
├── @base/
    ├── _reset.scss                    # CSS reset
    ├── _tipografia.scss               # Font definitions
    └── _elementos.scss                # Base element styles
├── @componentes/
    ├── _botones.scss                  # Button styles
    ├── _entradas.scss                 # Input styles
    └── _tarjetas.scss                 # Card styles
└── @utilidades/
    ├── _espaciado.scss                # Spacing utilities
    ├── _visibilidad.scss              # Visibility utilities
    └── _flexbox.scss                  # Flex utilities
```

**Uso en componente**:

```scss
// listar-usuarios.component.scss
@use '../../../estilos/abstractos/variables' as *;
@use '../../../estilos/abstractos/mixins' as *;
@use '../../../estilos/componentes/botones' as *;

.listar-usuarios {
  padding: spacing('lg');

  &__encabezado {
    @include flex-between;

    margin-bottom: spacing('md');
  }

  &__tabla {
    width: 100%;
    border-collapse: collapse;

    thead {
      background-color: color('primario', 100);
    }
  }

  &__boton-accion {
    @include boton-pequeno;
    @include boton-secundario;
  }
}
```

### 🔢 Manejo de Constantes

```typescript
// nucleo/utilidades/constantes.ts
export const URL_BASE_API = environment.apiUrl;

export const RUTAS = {
  ACCESO: '/acceso',
  REGISTRO: '/registro',
  DASHBOARD: '/app/dashboard',
  USUARIOS: '/app/usuarios'
} as const;

export const LIMITE_PAGINACION = 10;
export const LIMITE_MAXIMO_INTENTOS = 3;

export const MENSAJES_ERROR = {
  CREDENCIALES_INVALIDAS: 'Usuario o contraseña incorrectos',
  SESION_EXPIRADA: 'Tu sesión ha expirado',
  SIN_PERMISOS: 'No tienes permisos para realizar esta acción'
} as const;

export const EXPRESIONES_REGULARES = {
  EMAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  TELEFONO: /^\+?[1-9]\d{1,14}$/
} as const;
```

### 🏗️ Modelos e Interfaces

```typescript
// funcionalidades/usuarios/modelos/usuario.interface.ts
export interface Usuario {
  id: string;
  nombre: string;
  email: string;
  rol: RolUsuario;
  estado: EstadoUsuario;
  fechaCreacion: Date;
  ultimaActualizacion: Date;
}

// funcionalidades/usuarios/modelos/enums.ts
export enum RolUsuario {
  ADMINISTRADOR = 'administrador',
  OPERADOR = 'operador',
  VISUALIZADOR = 'visualizador'
}

export enum EstadoUsuario {
  ACTIVO = 'activo',
  INACTIVO = 'inactivo',
  BLOQUEADO = 'bloqueado'
}

// funcionalidades/usuarios/modelos/dtos/crear-usuario.dto.ts
export interface CrearUsuarioDto {
  nombre: string;
  email: string;
  password: string;
  rol: RolUsuario;
}

// funcionalidades/usuarios/modelos/forms/usuario-formulario.interface.ts
export interface UsuarioFormulario {
  nombre: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<string>;
  rol: FormControl<RolUsuario>;
}

// Uso en componente
export class CrearUsuarioComponent {
  formulario: FormGroup<UsuarioFormulario>;

  constructor() {
    this.formulario = new FormGroup<UsuarioFormulario>({
      nombre: new FormControl('', { validators: [Validators.required], nonNullable: true }),
      email: new FormControl('', { validators: [Validators.required, Validators.email], nonNullable: true }),
      password: new FormControl('', { validators: [Validators.required, Validators.minLength(8)], nonNullable: true }),
      rol: new FormControl(RolUsuario.OPERADOR, { nonNullable: true })
    });
  }
}
```

### 📦 Barrel Exports (index.ts)

```typescript
// funcionalidades/usuarios/index.ts
export * from './usuarios.routes';
export * from './servicios';
export * from './modelos';
export * from './almacenes';

// Import limpio desde otros módulos
import { UsuariosApiServicio } from '@funcionalidades/usuarios';
import { Usuario, RolUsuario } from '@funcionalidades/usuarios';
```

---

## 6. ESCALABILIDAD FUTURA

### 🌐 Multi-Dominio / Multi-Tenant

```typescript
// nucleo/interceptores/tenant.interceptor.ts
export const interceptorTenant: HttpInterceptorFn = (req, next) => {
  const almacenSvc = inject(AlmacenamientoServicio);
  const tenantId = almacenSvc.obtenerTenantId();

  if (tenantId) {
    const reqConTenant = req.clone({
      setHeaders: {
        'X-Tenant-ID': tenantId
      }
    });
    return next(reqConTenant);
  }

  return next(req);
};

// nucleo/servicios/tenant.servicio.ts
@Injectable({ providedIn: 'root' })
export class TenantServicio {
  private readonly tenantActual = signal<Tenant | null>(null);
  private readonly contextoCargado = signal(false);

  constructor(private http: HttpClient, private router: Router) {}

  async cargarContextoTenant(dominio: string): Promise<void> {
    const tenant = await firstValueFrom(
      this.http.get<Tenant>(`/api/v1/tenants/${dominio}`)
    );

    this.tenantActual.set(tenant);
    this.contextoCargado.set(true);

    // Aplicar configuración específica del tenant
    this.aplicarConfiguracionTenant(tenant);
  }

  private aplicarConfiguracionTenant(tenant: Tenant): void {
    // Tema personalizado
    document.documentElement.style.setProperty(
      '--color-primario',
      tenant.configuracion.colorPrimario
    );

    // Logo personalizado
    // Título personalizado
    // Configuraciones específicas
  }
}
```

### 📊 Dashboard Complejo

```typescript
// funcionalidades/dashboard/almacenes/dashboard.almacen.ts
@Injectable({ providedIn: 'root' })
export class DashboardAlmacen extends ComponentStore<EstadoDashboard> {
  constructor(private metricsSvc: MetricsApiServicio) {
    super({
      tarjetas: [],
      graficos: [],
      widgets: [],
      filtros: {
        rangoFechas: [inicioMes(), hoy()],
        comparacion: false
      },
      cargando: false
    });
  }

  readonly cargarMetricas = this.effect<void>(trigger$ =>
    trigger$.pipe(
      tap(() => this.patchState({ cargando: true })),
      withLatestFrom(this.select((state) => state.filtros)),
      switchMap(([_, filtros]) =>
        this.metricsSvc.obtenerMetricas(filtros).pipe(
          tapResponse({
            next: (metricas) => {
              this.patchState({
                tarjetas: metricas.tarjetas,
                graficos: metricas.graficos,
                cargando: false
              });
            },
            error: (error) => {
              this.patchState({ cargando: false });
            }
          })
        )
      )
    )
  );

  readonly actualizarFiltroRangoFechas = this.updater<
    [Date, Date]
  >((state, rango) => ({
    ...state,
    filtros: {
      ...state.filtros,
      rangoFechas: rango
    }
  }));
}
```

### ⚡ SSR (Server-Side Rendering) con Angular Universal

```typescript
// angular.json - Configuración para SSR
{
  "projects": {
    "muvar": {
      "architect": {
        "server": {
          "builder": "@angular-devkit/build-angular:server",
          "options": {
            "outputPath": "dist/server",
            "main": "src/main.server.ts",
            "tsConfig": "tsconfig.server.json"
          }
        },
        "prerender": {
          "builder": "@angular-devkit/build-angular:prerender",
          "options": {
            "routes": ["/", "/acceso", "/app/dashboard"]
          }
        }
      }
    }
  }
}

// src/main.server.ts
export function app(): string {
  const server = express();
  const distFolder = dirname(fileURLToPath(import.meta.url));

  server.engine('html', ngExpressEngine({
    bootstrap: AppServerModule,
  }));

  server.set('view engine', 'html');
  server.set('views', distFolder);

  server.get('*.*', express.static(distFolder, { maxAge: '1y' }));

  server.get('*', (req, res) => {
    res.render('index', { req });
  });

  return server;
}

// main.ts - Detección de SSR
export const bootstrapApplicationFn = () =>
  bootstrapApplication(AppComponent, appConfig);

if (isPlatformServer(PLATFORM_ID)) {
  enableProdMode();
  bootstrapApplicationFn();
} else {
  document.addEventListener('DOMContentLoaded', () => {
    bootstrapApplicationFn();
  });
}
```

### 🚀 Conversión a SaaS

```typescript
// funcionalidades/suscripciones/
// - planes/
// - facturacion/
// - uso/
// - limites/

// funcionalidades/suscripciones/almacenes/suscripcion.almacen.ts
@Injectable({ providedIn: 'root' })
export class SuscripcionAlmacen extends ComponentStore<EstadoSuscripcion> {
  private readonly limiteSvc = inject(LimitesServicio);

  readonly verificarLimite = this.effect<{
    tipo: TipoRecurso;
    cantidad: number;
  }>((request$) =>
    request$.pipe(
      switchMap(({ tipo, cantidad }) =>
        this.limiteSvc.verificarLimite(tipo, cantidad).pipe(
          tapResponse({
            next: (permitido) => {
              if (!permitido) {
              // Mostrar modal de upgrade
              this.mostrarModalUpgrade(tipo);
              }
            },
            error: (error) => {
              console.error('Error verificando límite', error);
            }
          })
        )
      )
    )
  );

  readonly mostrarModalUpgrade = (tipo: TipoRecurso) => {
    // Abrir modal con planes de mejora
  };
}

// Guardia para verificar suscripción
export const suscripcionActivaGuardia: CanActivateFn = () => {
  const suscripcionSvc = inject(SuscripcionServicio);
  const router = inject(Router);

  if (!suscripcionSvc.estaActiva()) {
    router.navigate(['/suscripciones/expirada']);
    return false;
  }

  return true;
};
```

### 📦 Modularidad para Micro-frontends

```typescript
// webpack.config.js para Module Federation
module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'muvar_app',
      filename: 'remoteEntry.js',
      exposes: {
        './DashboardModule': './src/app/funcionalidades/dashboard',
        './UsuariosModule': './src/app/funcionalidades/usuarios'
      },
      shared: {
        ...sharedDependencies,
        '@angular/core': {
          singleton: true,
          strictVersion: true
        },
        '@angular/common': {
          singleton: true,
          strictVersion: true
        }
      }
    })
  ]
};
```

---

## 🎯 RESUMEN DE DECISIONES ARQUITECTÓNICAS

| Aspecto | Decisión | Justificación |
|---------|----------|---------------|
| **Componentes** | Standalone | Mejor rendimiento, menos boilerplate, futuro de Angular |
| **Estado Global** | Signals + NgRx Signal Store | Reactividad nativa, mejor DX que RxJS puro |
| **Estado Local** | Signals | Simple, tipado, mejor rendimiento que OnPush |
| **HTTP** | HttpClient + Interceptors encadenados | Separación de responsabilidades |
| **Rutas** | Lazy loading funcional | Código dividido por dominio de negocio |
| **Validaciones** | Reactive Forms + Typed Forms | Type-safe, validaciones complejas |
| **Estilos** | SCSS + Diseño atómico | Escalable, mantenible |
| **Testing** | Jest + Testing Library | Más rápido que Karma, mejor DX |
| **Linting** | ESLint + Prettier | Estándar moderno |
| **Build** | Angular CLI + esbuild | Compilación más rápida |
| **SSR** | Angular Universal (opcional) | SEO, performance |

---

## 📚 PAQUETES RECOMENDADOS

```json
{
  "dependencies": {
    "@angular/animations": "^19.0.0",
    "@angular/common": "^19.0.0",
    "@angular/core": "^19.0.0",
    "@angular/forms": "^19.0.0",
    "@angular/platform-browser": "^19.0.0",
    "@angular/platform-browser-dynamic": "^19.0.0",
    "@angular/router": "^19.0.0",
    "@angular/cdk": "^19.0.0",
    "@angular/material": "^19.0.0",
    "@ngrx/signals": "^18.0.0",
    "@ngx-translate/core": "^15.0.0",
    "rxjs": "^7.8.0",
    "zone.js": "^0.15.0"
  },
  "devDependencies": {
    "@angular/build": "^19.0.0",
    "@angular/cli": "^19.0.0",
    "@angular/compiler-cli": "^19.0.0",
    "@types/node": "^20.0.0",
    "typescript": "~5.7.0",
    "jest": "^29.7.0",
    "@testing-library/angular": "^17.0.0",
    "eslint": "^9.0.0",
    "prettier": "^3.2.0",
    "husky": "^9.0.0",
    "lint-staged": "^15.0.0"
  }
}
```

---

## ✅ CHECKLIST DE IMPLEMENTACIÓN

- [ ] Crear estructura de carpetas
- [ ] Configurar Angular CLI con standalone components
- [ ] Implementar servicios del núcleo
- [ ] Crear layouts (público y administración)
- [ ] Implementar sistema de rutas con lazy loading
- [ ] Configurar interceptores HTTP
- [ ] Implementar guardias de autenticación/autorización
- [ ] Configurar sistema de temas
- [ ] Crear componentes UI compartidos
- [ ] Implementar primera funcionalidad (ej: dashboard)
- [ ] Configurar ESLint + Prettier
- [ ] Configurar Jest para testing
- [ ] Documentar estándares en Wiki/Confluence
- [ ] Configurar CI/CD
- [ ] Implementar sistema de logging
- [ ] Configurar manejo centralizado de errores

---

## 📖 REFERENCIAS

- [Angular Official Documentation](https://angular.dev)
- [Angular Style Guide](https://angular.dev/guide/styleguide)
- [NgRx Signal Store](https://ngrx.io/guide/signals/store)
- [Angular Testing Library](https://testing-library.com/docs/angular-testing-library/intro/)
- [Clean Code principles adapted to Angular](https://www.youtube.com/watch?v=Z3hcFIN_Rt0)

---

**Documento v1.0 - Arquitectura Frontend MUVAR**
Última actualización: Febrero 2026
