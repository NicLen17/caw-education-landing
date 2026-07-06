# CAW Education — Landing Page

Landing page oficial de **CAW Education**, la plataforma integral de gestión académica desarrollada por [Caw tech](https://caw.com.ar).

## Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) — animaciones de entrada y navegación
- [Phosphor Icons](https://phosphoricons.com/) — iconografía de trazo fino
- [Radix UI](https://www.radix-ui.com/) — componentes accesibles (Accordion, Label, etc.)
- [Vercel Analytics](https://vercel.com/analytics) y Speed Insights

## Requisitos

- Node.js 18+
- npm

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

La app queda disponible en [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando        | Descripción                          |
| -------------- | ------------------------------------ |
| `npm run dev`  | Servidor de desarrollo               |
| `npm run build`| Build de producción                  |
| `npm run start`| Servidor de producción (post-build)  |
| `npm run lint` | ESLint                               |

## Estructura del proyecto

```
app/                    # App Router (layout, page, estilos globales)
components/
  landing/              # Componentes compartidos de la landing
  ui/                   # Componentes base (shadcn/ui)
lib/
  landing-styles.ts     # Tokens de diseño (hover, bezel, mailto)
public/                 # Assets estáticos (logos, imágenes OG)
```

## Secciones

- Hero con CTA a demo
- Problemas y soluciones
- Características (grid 3×2)
- Módulos (grid 3×2)
- Análisis de datos
- Soluciones por nivel educativo
- Testimonios
- FAQ
- Formulario de contacto / demo
- Footer con crédito a Caw tech

## Contacto

- **Demo:** [cawtecharg@gmail.com](mailto:cawtecharg@gmail.com)
- **Web:** [caw.com.ar](https://caw.com.ar)

## Licencia

Proyecto privado © CAW Education / Caw tech.
