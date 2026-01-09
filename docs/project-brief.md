# Project Brief

**Student:** [CeliaHerrero]  
**Handle:** @[imcelia31]  
**Course:** Web Design 2025 · Fall  
---

## Project Concept

### What are you building?

<!-- Estoy diseñando un portfolio basado en mi porfolio visual previamente realizado. Busco que refleje claramente mi estilo personal y convertirlo en una experiencia visual dinámica, creativa y divertida.-->

### Who is it for?

<!-- Este portfolio está dirigido a posibles empresas interesadas en contratarme y, en un futuro, podría ampliarse incorporando una tienda donde vender prints o merchandising con mis diseños. -->

### Why does it matter?

<!-- Tener un portfolio web es la mejor forma de darse a conocer en el mundo del diseño y la ilustración, ya que es más accesible y dinámico que unas diapositivas y permite jugar con más elementos que aportan personalidad al trabajo. -->

---

## Technical Approach

### Core Technologies

- [x] HTML5 (semantic markup)
- [x] CSS3 (responsive design)
- [x] JavaScript (if applicable)
- [ ] Other: ****\_\_\_****

### Accessibility Goals

- [x] **Semantic HTML structure** (uses `<nav>`, `<main>`, `<section>`)
- [x] **Proper heading hierarchy** (`h1`, `h2` used for main sections)
- [x] **Alt text for images** (most images include `alt` attributes)
- [ ] **Keyboard navigation support** (partial — anchor links are keyboard-accessible; interactive widgets like lightbox/folders need explicit keyboard handlers and focus management)
- [ ] **Color contrast compliance** (palette defined but not yet audited against WCAG)
- [ ] **Screen reader compatibility** (partial — semantic markup helps; dynamic elements need ARIA attributes and testing)

**Recommendations:** add keyboard handlers for modals/lightbox (Enter/Escape), trap focus in open modals, and run automated accessibility checks (axe, Lighthouse).

### Responsive Design Strategy

- [ ] **Mobile-first approach** (styles are responsive but could be reorganized to prioritize small screens)
- [x] **Flexible grid system** (Flexbox is used for layout)
- [ ] **Scalable typography** (fonts declared via `@font-face`; consider `clamp()` / `rem`/`vw` for better scaling)
- [ ] **Optimized images** (images are local in `assets/` — recommend adding `srcset` and compression)
- [x] **Touch-friendly interactions** (lightbox includes touch support; other interactions are mouse-first)

**Notes:** The stylesheet `css/responsive.css` is present; test across devices and add responsive images to improve performance.

---

## Content Strategy

### Key Sections/Pages

1.Home
2.Portfolio / Work
3.About / About me
4.Contact

### Content Sources

<!-- Mis propias ilustraciones y diseños -->

### Multilingual Considerations

- Primary language: ingles 
- Translation strategy: En un funturo me gustaria implementar una función que lo puedeas ver en Español o en Ingles
---

## Design Direction

### Visual Style

<!-- Estoy siguiendo la misma línea creativa que en mi portfolio en presentación. Se trata de un estilo que bebe del mundo digital, inspirado en carpetas y ventanas, pero que a la vez se mezcla con mi estilo de dibujo y visual, muy centrado en la textura y el trazo analógico. Para reforzar este contraste utilizo tipografías que aluden a lo manual junto a mis ilustraciones, creando un lenguaje gráfico propio basado en la disonancia y el contraste.  -->

### Color Palette

<!-- #C4626E, #552222, #FBF4EA   -->

### Typography

<!-- advercasefront,billy y wondertype -->

### Inspiration/References

<!-- https://daria-stolyarova.com/, https://www.behance.net/gallery/195637393/Graphic-Design-Portfolio-2024 y https://studio-true.net/ -->

---

### Final Project Goals

- [x] Fully responsive across devices
- [x] Meets WCAG 2.1 AA standards
- [x] Fast loading performance
- [x] Complete content
- [x] Polished visual design

---

## Reflection Questions

### What excites you most about this project?
Transformar mi portfolio en una versión web y poder ver mi trabajo de esa manera.

### What challenges do you have? 
por ahora:
- Romper el código varias veces mientras experimentaba.
- Confusión con la colocación del código anterior, por lo que estoy empezando desde cero.
- Algunos tamaños de elementos aún no se ajustan correctamente
- Que se me olvida hacer commits
- Algunos elementos no encajan correctamente (en el about me)
- Al hacer mucho zoom se me rompe el responsive y no consigo solucionarlo

### How does this project connect to your learning goals?
Me esta permitiendo experimentar mas desde una zona de comfort como es mi estilo. 
---

_This brief will evolve as your project develops. Update it as needed and reference it in your weekly commits._