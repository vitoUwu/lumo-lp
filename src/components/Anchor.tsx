import type { AnchorHTMLAttributes } from "react";
import { cn } from "../utils/cn";

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export default function Anchor({ children, ...props }: AnchorProps) {
  return (
    <a
      {...props}
      className={cn(
        props.className,
        "bg-primary min-h-8 lg:min-h-10 w-fit px-6",
        "flex justify-center items-center",
        "text-primary-text text-xs/none font-semibold uppercase",
        "lg:text-base/none",
      )}
    >
      {children}
    </a>
  );
}
