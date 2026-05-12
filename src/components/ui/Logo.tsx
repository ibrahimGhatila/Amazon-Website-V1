import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
  href?: string | null;
};

export function Logo({ className, href = "/" }: LogoProps) {
  const inner = (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src="https://ec.com.pk/assets/img/logo.svg"
      alt="Extreme Commerce"
      className={cn("h-10 w-auto", className)}
    />
  );

  if (href === null) return inner;
  return (
    <Link href={href} aria-label="Extreme Commerce home" className="inline-flex">
      {inner}
    </Link>
  );
}
