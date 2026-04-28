import type { HTMLAttributes, JSX } from "react";
import { cn } from "../utils/cn";

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & { level?: number };

const HEADINGS: Record<
  number,
  keyof Pick<JSX.IntrinsicElements, "h1" | "h2" | "h3" | "h4" | "h5" | "h6">
> = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
  5: "h5",
  6: "h6",
};

export default function Heading({
  children,
  level = 1,
  ...props
}: HeadingProps) {
  const Tag = HEADINGS[level] || "h1";

  return (
    <Tag
      {...props}
      className={cn(
        "text-5xl text-primary font-sora font-semibold",
        props.className,
      )}
    >
      {children}
    </Tag>
  );
}
