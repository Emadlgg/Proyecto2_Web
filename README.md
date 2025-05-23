# Calculadora React 

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.4.5-yellow.svg)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

Una calculadora moderna con funcionalidades avanzadas construida con React, diseñada para cumplir con requisitos técnicos específicos y mejores prácticas de desarrollo.


---

## ✨ Características Principales

✅ **Operaciones básicas**
Suma, Resta, Multiplicación, División y Módulo

✅ **Manejo de decimales**
Soporte para punto decimal con límite de 9 caracteres

✅ **Gestión de errores**
Muestra `ERROR` para:

* Números negativos
* Resultados > 999,999,999
* División por cero

✅ **Interfaz responsive**
Diseño adaptable a diferentes dispositivos

✅ **Testing completo**
Cobertura de tests con Jest y React Testing Library

✅ **Storybook integrado**
Documentación de componentes interactiva

---

## ✅ Requisitos Técnicos Cumplidos

* ✔️ Límite de 9 caracteres en display
* ✔️ Custom Hook para lógica de negocio
* ✔️ ESLint con configuración Standard JS
* ✔️ 100% de cobertura en pruebas críticas

---

## 🚀 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/tu-repositorio.git
```

2. Instala dependencias:

```bash
npm install
```

3. Inicia la aplicación:

```bash
npm run dev
```

---

## 🔧 Comandos Útiles

| Comando             | Descripción                   |
| ------------------- | ----------------------------- |
| `npm run dev`       | Inicia servidor de desarrollo |
| `npm run build`     | Crea versión de producción    |
| `npm test`          | Ejecuta pruebas unitarias     |
| `npm run storybook` | Inicia Storybook              |
| `npm run lint`      | Verifica calidad de código    |

---

## 🛠️ Tecnologías Utilizadas

### Frontend:

<img src="https://img.icons8.com/office/40/000000/react.png" alt="React" width="30"/> React <img src="https://vitejs.dev/logo.svg" alt="Vite" width="30"/> Vite <img src="https://storybook.js.org/images/logos/logo-storybook.svg" alt="Storybook" width="30"/> Storybook

### Testing:

<img src="https://jestjs.io/img/favicon/favicon-32x32.png" alt="Jest" width="30"/> Jest <img src="https://testing-library.com/img/octopus-64x64.png" alt="Testing Library" width="30"/> React Testing Library

### Calidad de Código:

<img src="https://eslint.org/assets/img/favicon.512x512.png" alt="ESLint" width="30"/> ESLint <img src="https://standardjs.com/standardjs-256x256.png" alt="Standard JS" width="30"/> JavaScript Standard Style

---

## 📁 Estructura de Archivos

```
proyecto1/
├── src/
│   ├── components/
│   │   └── Calculator/
│   │       ├── Calculator.jsx     # Componente principal
│   │       ├── Keypad.jsx         # Teclado interactivo
│   │       └── Display.jsx        # Pantalla de resultados
│   ├── hooks/
│   │   └── useCalculator.js       # Lógica de la calculadora
│   └── stories/                   # Documentación de componentes
├── tests/                         # Pruebas unitarias
└── public/                        # Assets estáticos
```

---

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT

