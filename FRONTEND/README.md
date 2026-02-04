# MUVAR Frontend

Plataforma Frontend Enterprise construida con Angular 19+.

## 🏗️ Arquitectura

Este proyecto sigue una arquitectura enterprise con:

- **Standalone Components** (Angular 19+)
- **Signals** para reactividad
- **TypeScript** tipado estricto
- **SCSS** con diseño atómico
- **Lazy loading** por funcionalidades

## 📁 Estructura

```
src/
├── app/
│   ├── nucleo/           # Funcionalidades base inmutables
│   ├── compartido/       # Componentes y layouts reutilizables
│   ├── funcionalidades/  # Módulos de negocio independientes
│   └── disenos/          # Temas y estilos globales
├── assets/               # Recursos estáticos
├── entornos/             # Configuraciones de entorno
└── estilos/              # Estilos globales
```

## 🚀 Comandos

### Desarrollo
```bash
npm start
# ó
ng serve --configuration=development
```

### Build
```bash
# Producción
npm run build:prod

# Con análisis de bundle
npm run build:stats
npm run analyze
```

### Testing
```bash
# Ejecutar tests
npm test

# Con coverage
npm run test:coverage

# Modo watch
npm run test:watch
```

### Linting y Formateo
```bash
# Lint
npm run lint

# Lint con autocorrección
npm run lint:fix

# Formatear código
npm run format
```

## 🔧 Configuración

### Entornos disponibles
- `desarrollo` - Desarrollo local
- `pruebas` - Ambiente de pruebas
- `preproduccion` - Pre-producción
- `produccion` - Producción

### Variables de entorno
Editar archivos en `src/entornos/`.

## 📦 Dependencias principales

- `@angular/core` ^19.0.0
- `@angular/material` ^19.0.0
- `@ngrx/signals` ^18.0.0
- `rxjs` ^7.8.1

## 🎨 Estándares de Código

- **ESLint** para linting
- **Prettier** para formateo
- **Husky** + **lint-staged** para pre-commit hooks

## 📖 Convenciones

### Nomenclatura
- **Componentes**: PascalCase + `Component` (ej: `ListarUsuariosComponent`)
- **Servicios**: PascalCase + `Servicio` (ej: `AutenticacionServicio`)
- **Archivos**: kebab-case (ej: `listar-usuarios.component.ts`)

### Organización de imports
1. Dependencias externas
2. Dependencias internas (usando aliases)
3. Estilos y assets

## 🔐 Seguridad

- Interceptores HTTP para autenticación
- Guardias de ruta para autorización
- Tokens almacenados de forma segura
- Validación de formularios tipada

## 🌐 Internacionalización

Soporte multi-idioma configurado:
- Español (`es.json`)
- Inglés (`en.json`)

Archivos en `src/assets/i18n/`.

## 📄 Licencia

Copyright © 2026 MUVAR. Todos los derechos reservados.
