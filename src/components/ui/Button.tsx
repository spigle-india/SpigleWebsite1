import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "accent" | "secondary" | "ghost" | "link";
type Size = "sm" | "md" | "lg";

type ButtonBaseProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  withArrow?: boolean;
  icon?: ReactNode;
};

type ButtonAsLink = ButtonBaseProps & {
  href: string;
  external?: boolean;
  type?: never;
  onClick?: () => void;
};

type ButtonAsButton = ButtonBaseProps & {
  href?: never;
  external?: never;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

export type ButtonProps = ButtonAsLink | ButtonAsButton;

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-white hover:bg-ink-2 focus-visible:outline-ink",
  accent:
    "bg-accent text-white hover:bg-accent-deep focus-visible:outline-accent",
  secondary:
    "border border-line-strong bg-white text-ink hover:border-ink/40 hover:bg-surface",
  ghost: "text-muted hover:text-ink",
  link: "text-ink underline decoration-line-strong underline-offset-4 hover:decoration-ink",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-[0.9375rem]",
  lg: "h-12 px-6 text-base",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  withArrow = false,
  icon,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-200",
    variant !== "link" && sizes[size],
    variant !== "link" && "select-none",
    variants[variant],
    className,
  );

  const content = (
    <>
      {icon}
      {children}
      {withArrow ? <ArrowRight className="size-4" aria-hidden="true" /> : null}
    </>
  );

  if ("href" in props && props.href) {
    const { href, external, ...rest } = props;
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          {...rest}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  const { type = "button", onClick } = props;
  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
