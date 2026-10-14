"use client";

import { useEffect, useRef } from "react";

/** Comprimento de cada perna da corrente (px). */
const LENGTH = 220;
/** Raio da curva do laço (px): as pernas ficam a 2 * RADIUS uma da outra. */
const RADIUS = 7;
const BEAD_RADIUS = 2.6;
const BEAD_GAP = 9;
const PAD = 8;

// O laço é fechado: desce pela esquerda, faz a curva embaixo, sobe pela direita
// e volta por uma curva escondida acima da borda (dentro do "rolo"). Ajustamos
// o espaçamento para caber um número inteiro de bolinhas e não haver salto
// quando uma bolinha dá a volta.
const PERIMETER = 2 * LENGTH + 2 * Math.PI * RADIUS;
const COUNT = Math.round(PERIMETER / BEAD_GAP);
const SPACING = PERIMETER / COUNT;
const ARC = Math.PI * RADIUS;

const WIDTH = 2 * RADIUS + 2 * PAD;
const HEIGHT = LENGTH + RADIUS + 2 * PAD;
const LEFT = PAD;
const RIGHT = PAD + 2 * RADIUS;
const CX = PAD + RADIUS;

/** Ponto do laço a uma distância `d` do topo da perna esquerda. */
function pointAt(d: number): [number, number] {
  d = ((d % PERIMETER) + PERIMETER) % PERIMETER;
  if (d < LENGTH) return [LEFT, d];
  d -= LENGTH;
  if (d < ARC) {
    const a = Math.PI - d / RADIUS;
    return [CX + RADIUS * Math.cos(a), LENGTH + RADIUS * Math.sin(a)];
  }
  d -= ARC;
  if (d < LENGTH) return [RIGHT, LENGTH - d];
  d -= LENGTH;
  const a = -d / RADIUS;
  return [CX + RADIUS * Math.cos(a), RADIUS * Math.sin(a)];
}

const STRING_PATH = `M ${LEFT} 0 V ${LENGTH} A ${RADIUS} ${RADIUS} 0 0 0 ${RIGHT} ${LENGTH} V 0`;

/**
 * Corrente de bolinhas de persiana (só a silhueta). Fica pendurada na borda de
 * cima de onde for colocada, balança de leve sozinha e, com o scroll, ganha um
 * empurrão no balanço e as bolinhas correm pelo laço, como quem puxa a corrente.
 * Só anima enquanto está na tela; com `prefers-reduced-motion` fica parada.
 */
const BeadChain = ({ className = "" }: { className?: string }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const swingRef = useRef<SVGGElement>(null);
  const beadRefs = useRef<(SVGCircleElement | null)[]>([]);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const placeBeads = (offset: number) => {
      beadRefs.current.forEach((bead, i) => {
        if (!bead) return;
        const [x, y] = pointAt(i * SPACING + offset);
        bead.setAttribute("cx", x.toFixed(2));
        bead.setAttribute("cy", y.toFixed(2));
      });
    };

    placeBeads(0);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let running = false;
    let lastScroll = window.scrollY;
    let pendingDelta = 0;
    let offset = 0;
    let targetOffset = 0;
    let angle = 0;
    let velocity = 0;
    let start = 0;

    const onScroll = () => {
      const y = window.scrollY;
      pendingDelta += y - lastScroll;
      lastScroll = y;
    };

    const tick = (now: number) => {
      if (!start) start = now;
      const t = (now - start) / 1000;

      // Scroll: puxa a corrente e dá um empurrão no balanço.
      targetOffset += pendingDelta * 0.5;
      velocity += Math.max(-0.35, Math.min(0.35, pendingDelta * 0.006));
      pendingDelta = 0;

      // Mola amortecida para o empurrão + balanço ambiente bem leve.
      velocity += -0.01 * angle - 0.07 * velocity;
      angle += velocity;
      const sway = 0.8 * Math.sin(t * 0.9) + 0.3 * Math.sin(t * 0.5 + 1);

      offset += (targetOffset - offset) * 0.15;
      placeBeads(offset);
      swingRef.current?.setAttribute(
        "transform",
        `rotate(${(angle + sway).toFixed(3)} ${CX} 0)`
      );

      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !running) {
        running = true;
        lastScroll = window.scrollY;
        window.addEventListener("scroll", onScroll, { passive: true });
        frame = requestAnimationFrame(tick);
      } else if (!entry.isIntersecting && running) {
        running = false;
        window.removeEventListener("scroll", onScroll);
        cancelAnimationFrame(frame);
      }
    });
    observer.observe(wrapper);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={wrapperRef} aria-hidden className={`pointer-events-none ${className}`}>
      <svg
        width={WIDTH}
        height={HEIGHT}
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="block overflow-visible"
      >
        <g ref={swingRef} fill="currentColor" stroke="currentColor">
          <path d={STRING_PATH} fill="none" strokeWidth={0.8} />
          {Array.from({ length: COUNT }, (_, i) => (
            <circle
              key={i}
              ref={(el) => {
                beadRefs.current[i] = el;
              }}
              r={BEAD_RADIUS}
              stroke="none"
            />
          ))}
        </g>
      </svg>
    </div>
  );
};

export default BeadChain;
