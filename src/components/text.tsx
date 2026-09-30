import { cva, type VariantProps } from "class-variance-authority"
import { createElement, type JSX, type ReactNode } from "react"

export const textVariants = cva("font-sans text-gray-400", {
  defaultVariants: {
    variant: "body-md",
  },
  variants: {
    variant: {
      "body-md": "font-normal text-basem leading-6",
      "body-md-bold": "font-semibold text-basem leading-6",
      "body-sm-bold": "font-semibold text-sm leading-5",
    },
  },
})

interface TextProps extends VariantProps<typeof textVariants> {
  as?: keyof JSX.IntrinsicElements
  children?: ReactNode
  className?: string
}

export function Text({
  as = "span",
  variant,
  className,
  children,
  ...props
}: TextProps) {
  return createElement(
    as,
    {
      className: textVariants({ className, variant }),
      ...props,
    },
    children
  )
}
