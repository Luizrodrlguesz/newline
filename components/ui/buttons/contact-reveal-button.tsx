import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContactRevealButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  icon: ReactNode;
  children: ReactNode;
};

/**
 * Botão-link de contato: um círculo marrom com ícone ao lado do rótulo; no
 * hover o marrom se expande e vira uma pílula inteira, com o círculo do ícone
 * ficando caramelo.
 * Adaptado do Contact Reveal Button da MicroKit —
 * https://microkit.co/components/contact-reveal-button
 */
const ContactRevealButton = ({
  icon,
  children,
  className,
  ...props
}: ContactRevealButtonProps) => (
  <a
    className={cn(
      "group relative inline-flex h-11 items-center gap-3 overflow-hidden rounded-full pr-5 text-sm font-semibold text-gray-800 transition-colors [transition-duration:280ms]",
      "hover:text-white focus-visible:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--caramel)]",
      className
    )}
    {...props}
  >
    <span
      aria-hidden="true"
      className="absolute inset-y-0 left-0 w-11 rounded-full bg-[var(--brown)] transition-[width] [transition-duration:320ms] [transition-timing-function:cubic-bezier(.4,0,.2,1)] group-hover:w-full group-focus-visible:w-full"
    />
    <span className="relative z-10 grid h-11 w-11 shrink-0 place-items-center rounded-full text-white transition-colors [transition-delay:120ms] duration-200 group-hover:bg-[var(--caramel)] group-focus-visible:bg-[var(--caramel)]">
      {icon}
    </span>
    <span className="relative z-10 whitespace-nowrap">{children}</span>
  </a>
);

export default ContactRevealButton;
