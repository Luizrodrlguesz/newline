"use client";

import type {
  AnchorHTMLAttributes,
  PointerEvent as ReactPointerEvent,
  ReactNode,
} from "react";
import { cn } from "@/lib/utils";

type MagneticFillButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  /** `dark`: para fundos escuros (contorno/texto claros). */
  tone?: "dark" | "light";
};

/**
 * Botão-link em pílula com contorno que "puxa" levemente em direção ao cursor
 * (magnético) e se preenche de caramelo de baixo para cima no hover.
 * Adaptado do Magnetic Fill Button da MicroKit —
 * https://microkit.co/components/magnetic-fill-button
 */
const MagneticFillButton = ({
  children,
  tone = "dark",
  className,
  ...props
}: MagneticFillButtonProps) => {
  const move = (event: ReactPointerEvent<HTMLAnchorElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - (bounds.left + bounds.width / 2)) * 0.14;
    const y = (event.clientY - (bounds.top + bounds.height / 2)) * 0.22;
    event.currentTarget.style.setProperty("--magnetic-x", `${x}px`);
    event.currentTarget.style.setProperty("--magnetic-y", `${y}px`);
  };
  const reset = (event: ReactPointerEvent<HTMLAnchorElement>) => {
    event.currentTarget.style.setProperty("--magnetic-x", "0px");
    event.currentTarget.style.setProperty("--magnetic-y", "0px");
  };

  return (
    <a
      onPointerMove={move}
      onPointerLeave={reset}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border-2 border-[var(--caramel)] px-8 py-3.5 text-base font-semibold",
        "[transform:translate(var(--magnetic-x,0px),var(--magnetic-y,0px))] transition-[transform,color] [transition-duration:220ms] [transition-timing-function:cubic-bezier(.16,1,.3,1)]",
        "hover:text-[#17120f] focus-visible:text-[#17120f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--caramel)]",
        tone === "dark" ? "text-white" : "text-[var(--brown)]",
        className
      )}
      {...props}
    >
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
      <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-0 bg-[var(--caramel)] transition-[height] [transition-duration:380ms] [transition-timing-function:cubic-bezier(.16,1,.3,1)] group-hover:h-full group-focus-visible:h-full"
      />
    </a>
  );
};

export default MagneticFillButton;
