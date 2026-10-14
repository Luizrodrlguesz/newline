import type { AnchorHTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ArrowSlideButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  /** `dark`: para fundos escuros (contorno/texto claros). */
  tone?: "dark" | "light";
};

const ARROW =
  "absolute -rotate-45 transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)]";

/**
 * Botão-link em pílula com contorno e uma seta diagonal que sai pela ponta e
 * entra de novo pelo outro lado no hover.
 * Adaptado do Preview in Browser Button da MicroKit —
 * https://microkit.co/components/preview-browser-button
 */
const ArrowSlideButton = ({
  children,
  tone = "dark",
  className,
  ...props
}: ArrowSlideButtonProps) => (
  <a
    className={cn(
      "group inline-flex items-center justify-center gap-2 rounded-full border px-7 py-3.5 text-base font-semibold transition-colors duration-300",
      "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[var(--caramel)]",
      tone === "dark"
        ? "border-white/50 text-white hover:border-white"
        : "border-[rgba(110,64,36,0.4)] text-[var(--brown)] hover:border-[var(--brown)]",
      className
    )}
    {...props}
  >
    <span>{children}</span>
    <span
      aria-hidden="true"
      className="relative grid h-5 w-[17px] place-items-center overflow-hidden"
    >
      <ArrowRight
        size={17}
        strokeWidth={2.4}
        className={cn(
          ARROW,
          "group-hover:translate-x-4 group-hover:-translate-y-3 group-focus-visible:translate-x-4 group-focus-visible:-translate-y-3"
        )}
      />
      <ArrowRight
        size={17}
        strokeWidth={2.4}
        className={cn(
          ARROW,
          "-translate-x-4 translate-y-3 group-hover:translate-x-0 group-hover:translate-y-0 group-focus-visible:translate-x-0 group-focus-visible:translate-y-0"
        )}
      />
    </span>
  </a>
);

export default ArrowSlideButton;
