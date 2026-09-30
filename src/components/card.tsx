import { cva, type VariantProps } from "class-variance-authority"
import { type ComponentProps, createElement, type JSX } from "react"

export const cardVariants = cva(
  "rounded-lg border border-gray-200 border-solid shadow-sm",
  {
    defaultVariants: {
      size: "none",
    },
    variants: {
      size: {
        md: "p-5",
        none: "",
      },
    },
  }
)

interface CardProps
  extends Omit<ComponentProps<"div">, "size">,
    VariantProps<typeof cardVariants> {
  as?: keyof JSX.IntrinsicElements
}

export function Card({
  as = "div",
  size,
  className,
  children,
  ...props
}: CardProps) {
  return createElement(
    as,
    {
      className: cardVariants({ className, size }),
      ...props,
    },
    children
  )
}
