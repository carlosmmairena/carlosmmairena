# Estructura de Componentes - Atomic Design

Este proyecto utiliza la metodología **Atomic Design** para organizar los componentes de manera escalable y mantenible.

## 📁 Estructura de Directorios

```
src/components/
├── atoms/          # Elementos básicos e indivisibles
├── molecules/      # Combinaciones simples de átomos
├── organisms/      # Componentes complejos con funcionalidad
└── templates/      # Estructuras de página sin contenido específico
```

## ⚛️ Átomos (atoms/)
Elementos básicos e indivisibles de la interfaz:
- `Button.astro` - Botones con diferentes variantes y tamaños
- `Heading.astro` - Títulos con niveles semánticos configurables
- `Text.astro` - Texto con diferentes estilos y colores

## 🧬 Moléculas (molecules/)
Combinaciones simples de átomos que forman componentes más complejos:
- `Card.astro` - Tarjeta básica con título y contenido

## 🦠 Organismos (organisms/)
Componentes complejos formados por moléculas y átomos:
- Header, Navigation, Hero sections, etc.

## 📄 Templates (templates/)
Estructuras de página que definen el layout sin contenido específico:
- Layout de página principal, página de proyecto, etc.

## 🎨 Convenciones de Uso

### Átomos
```astro
<Button variant="primary" size="lg">
  Hacer clic aquí
</Button>

<Heading level={1} size="4xl">
  Título Principal
</Heading>

<Text color="muted" size="sm">
  Texto descriptivo
</Text>
```

### Moléculas
```astro
<Card 
  title="Mi Proyecto" 
  body="Descripción del proyecto..."
/>
```
