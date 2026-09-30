import { cva, type VariantProps } from "class-variance-authority"
import { type ComponentProps, createElement, type JSX } from "react"

export const containerVariants = cva("mx-auto", {
  defaultVariants: {
    size: "md",
  },
  variants: {
    size: {
      md: "max-w-126 px-2",
    },
  },
})

interface ContainerProps
  extends Omit<ComponentProps<"div">, "size">,
    VariantProps<typeof containerVariants> {
  as?: keyof JSX.IntrinsicElements
}

export function Container({
  as = "div",
  size,
  className,
  children,
  ...props
}: ContainerProps) {
  return createElement(
    as,
    {
      className: containerVariants({ className, size }),
      ...props,
    },
    children
  )
}
