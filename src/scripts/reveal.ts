import { animate, inView } from 'motion';

// Fade-and-rise each [data-reveal] element the first time it enters the viewport.
if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
  inView(
    '[data-reveal]',
    (el) => {
      animate(el, { opacity: 1, transform: 'translateY(0px)' }, { duration: 0.7, ease: [0.22, 1, 0.36, 1] });
    },
    { margin: '0px 0px -10% 0px' },
  );
}
