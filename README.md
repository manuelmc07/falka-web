# 🎨 Falka - Demo Web

Demo oficial del sitio web de **Falka**, una marca de productos escolares premium que inspira creatividad en cada niño.

![Falka Logo](./public/LOGOS/LOGO%20AND%20BRAND/Falka%20Logo%20BLUE.png)

## 🚀 Demo en Vivo

El sitio de demo está disponible en: [http://localhost:4321](http://localhost:4321) (después de ejecutar `npm run dev`)

## 📋 Características del Demo

### ✨ Funcionalidades Implementadas

- **🏠 Página de Inicio**
  - Hero section impactante con gradientes de marca
  - Productos destacados con animaciones hover
  - Sección "¿Por qué elegir Falka?" con valores de marca
  - Call-to-action estratégicos

- **📦 Página de Productos**
  - Catálogo visual con filtros funcionales
  - Cards de productos con información detallada
  - Productos actuales y próximamente disponibles
  - Sistema de categorización (Colores, Lápices, Accesorios)

- **🏢 Nuestra Empresa**
  - Historia y misión de la marca
  - Valores corporativos con íconos
  - Visión a futuro y compromiso educativo
  - Estadísticas y métricas de impacto

- **📞 Contacto**
  - Formulario de contacto funcional con validación
  - Información de contacto completa
  - Horarios de atención
  - Sección especial para distribuidores

### 🎨 Diseño y Branding

- **Colores de Marca**: Azul (#0066CC), Naranja (#FF6B35), Amarillo (#FFD23F)
- **Tipografía**: Fuentes personalizadas Diagramm (Regular y Bold)
- **Responsive Design**: Optimizado para mobile, tablet y desktop
- **Animaciones**: Transiciones suaves y efectos hover
- **Componentes**: Sistema de diseño consistente

### 🛠️ Stack Tecnológico

- **Framework**: Astro 4.x (Static Site Generator)
- **Build Tool**: Vite (Desarrollo rápido)
- **Estilos**: Tailwind CSS 3.x (Utility-first CSS)
- **Fuentes**: Custom fonts (Diagramm family)
- **Optimización**: Lazy loading, compresión de imágenes
- **SEO**: Meta tags, Open Graph, structured data

## 🔧 Instalación y Configuración

### Prerrequisitos

- Node.js 18+ 
- npm o yarn
- Git

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <repository-url>
   cd falka-web
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en navegador**
   ```
   http://localhost:4321
   ```

### Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo
npm run start        # Alias para dev

# Producción
npm run build        # Construir para producción
npm run preview      # Preview del build de producción
```

## 📁 Estructura del Proyecto

```
falka-web/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── Header.astro     # Navegación principal
│   │   └── Footer.astro     # Pie de página
│   ├── layouts/
│   │   └── Layout.astro     # Layout base con SEO
│   ├── pages/               # Páginas del sitio
│   │   ├── index.astro      # Página de inicio
│   │   ├── productos.astro  # Catálogo de productos
│   │   ├── empresa.astro    # Nuestra empresa
│   │   └── contacto.astro   # Contacto
│   └── styles/
│       └── global.css       # Estilos globales y fuentes
├── public/                  # Assets estáticos
│   ├── LOGOS/              # Logos de la marca
│   ├── FONT/               # Fuentes Diagramm
│   └── SAMPLES BOXES/      # Imágenes de productos
├── astro.config.mjs        # Configuración de Astro
├── tailwind.config.mjs     # Configuración de Tailwind
└── package.json            # Dependencias y scripts
```

## 🎨 Recursos de Branding Utilizados

### Logotipos
- **Logo Horizontal Azul**: Navegación principal
- **Logo Horizontal Blanco**: Footer
- **Isotipo Azul**: Favicon
- **Isotipo Blanco**: Elementos decorativos

### Fuentes Personalizadas
- **Diagramm Regular**: Texto general
- **Diagramm Bold**: Títulos y elementos destacados

### Productos Mostrados
- **Caja de Colores Premium**: Producto estrella
- **Caja de Lápices Profesional**: Línea básica
- **Productos próximamente**: Roadmap futuro

## 🌟 Características Técnicas

### Performance
- **Lazy Loading**: Imágenes cargadas bajo demanda
- **Optimización**: Assets comprimidos automáticamente
- **Core Web Vitals**: Optimizado para métricas de Google

### SEO
- **Meta Tags**: Títulos y descripciones optimizadas
- **Open Graph**: Cards sociales configuradas
- **Structured Data**: Markup para productos
- **Sitemap**: Generación automática

### Accesibilidad
- **Contraste**: Colores con contraste suficiente
- **Navegación**: Accesible por teclado
- **Alt Text**: Todas las imágenes etiquetadas
- **ARIA**: Roles y etiquetas semánticas

## 📱 Responsive Design

El sitio está optimizado para:

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+
- **Large Desktop**: 1440px+

### Breakpoints de Tailwind
- `sm`: 640px+
- `md`: 768px+
- `lg`: 1024px+
- `xl`: 1280px+

## 🔮 Próximas Funcionalidades

### Para el Desarrollo Completo

1. **Sistema de Email**
   - Integración con EmailJS o similar
   - Autorespuestas configuradas
   - Notificaciones en tiempo real

2. **Analytics Avanzado**
   - Google Analytics 4
   - Tracking de conversiones
   - Heatmaps de comportamiento

3. **SEO Avanzado**
   - Investigación de keywords
   - Schema.org completo
   - Google Search Console

4. **Optimizaciones**
   - Service Worker para caché
   - Compresión avanzada
   - CDN para assets globales

## 🚀 Deploy a Producción

### Recomendaciones de Hosting

1. **Netlify** (Recomendado)
   ```bash
   # Build automático desde Git
   # SSL incluido
   # CDN global
   ```

2. **Vercel**
   ```bash
   npm run build
   # Deploy automático
   ```

3. **Hosting Tradicional**
   ```bash
   npm run build
   # Subir carpeta dist/
   ```

### Variables de Entorno

Para producción, configurar:

```env
# EmailJS (para formulario de contacto)
EMAILJS_SERVICE_ID=your_service_id
EMAILJS_TEMPLATE_ID=your_template_id
EMAILJS_PUBLIC_KEY=your_public_key

# Analytics
GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
```

## 🤝 Contribución

### Estándares de Código

- **ESLint**: Linting automático
- **Prettier**: Formateo de código
- **Conventional Commits**: Mensajes de commit estándar

### Flujo de Desarrollo

1. Fork del repositorio
2. Crear branch feature
3. Desarrollar y testear
4. Pull request con descripción detallada

## 📞 Soporte y Contacto

**Desarrollador**: [Tu Nombre]  
**Email**: [tu@email.com]  
**Proyecto**: Demo Falka Web  

### Para el Cliente

**Email de proyecto**: info@falka.art  
**Feedback**: [Formulario de contacto del sitio]

---

## 📝 Notas de Desarrollo

### Decisiones Técnicas

1. **¿Por qué Astro?**
   - Performance superior para sitios estáticos
   - SEO optimizado por defecto
   - Flexibilidad para futuras integraciones

2. **¿Por qué Tailwind CSS?**
   - Desarrollo rápido y consistente
   - Purge automático de CSS no utilizado
   - Sistema de diseño escalable

3. **Estructura de Componentes**
   - Componentes pequeños y reutilizables
   - Props tipados para mejor DX
   - Separación clara de responsabilidades

### Optimizaciones Implementadas

- **Fonts**: Preload de fuentes críticas
- **Images**: Lazy loading nativo
- **CSS**: Purge automático de Tailwind
- **JS**: Bundle splitting de Vite

---

**¡Demo de Falka listo para presentar! 🎨✨**
