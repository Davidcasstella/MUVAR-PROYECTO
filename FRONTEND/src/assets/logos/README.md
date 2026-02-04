# 📁 CARPETA DE LOGOS - INVERSIONES MUVAR

## 📍 UBICACIÓN
```
src/assets/logos/
```

## 🎨 LOGO ACTUAL
- **Archivo**: `logo-muvar.svg`
- **Diseño**: Logo con texto "INVERSIONES" (gris) + "MUVAR" (verde) + M estilizada con corazón rojo
- **Tamaño**: 200x80px (SVG vectorial, escalable)
- **Uso**: Navbar principal del sitio

## 🔄 CÓMO REEMPLAZAR CON TU PROPIO LOGO

### Opción 1: SVG Recomendado (Mejor calidad)
1. Coloca tu archivo logo en esta carpeta:
   ```
   src/assets/logos/logo-muvar.svg
   ```
2. Asegúrate que sea formato **SVG** para máxima nitidez
3. El tamaño se ajustará automáticamente en el navbar

### Opción 2: PNG (Aceptado)
1. Coloca tu archivo logo como:
   ```
   src/assets/logos/logo-muvar.png
   ```
2. **Dimensiones recomendadas**: 200x80 píxeles (mínimo 140x60)
3. Resolución: 72 DPI (web)
4. Fondo: Transparente (PNG)

## ⚙️ AJUSTAR TAMAÑO DEL LOGO

En el archivo `navbar.component.scss` (línea ~42):

```scss
.logo-img {
  width: 140px;  // ← Cambia este valor
  height: auto;
}
```

Tamaños comunes:
- Navbar estándar: 140px
- Logo grande: 180px
- Logo compacto: 120px

## ✅ LISTO DE VERIFICACIÓN

- [ ] Archivo llamado `logo-muvar.svg` o `.png`
- [ ] Ubicado en `src/assets/logos/`
- [ ] Fondo transparente
- [ ] Mínimo 140px de ancho
- [ ] Recargar navegador: `Ctrl + F5`

