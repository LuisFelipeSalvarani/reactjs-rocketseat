import { cva, cx, type VariantProps } from "class-variance-authority"
import type { ComponentProps } from "react"
import { textVariants } from "./text"

export const inputTextVariants = cva(
  "border-gray-200 border-b border-solid bg-transparent outline-none focus:border-pink-base",
  {
    defaultVariants: {
      disabled: false,
      size: "md",
    },
    variants: {
      disabled: {
        true: "pointer-events-none",
      },
      size: {
        md: "px-2 pb-2",
      },
    },
  }
)

interface InputTextProps
  extends Omit<ComponentProps<"input">, "size" | "disabled">,
    VariantProps<typeof inputTextVariants> {}

export function InputText({
  size,
  disabled,
  className,
  ...props
}: InputTextProps) {
  return (
    <input
      className={cx(
        inputTextVariants({ disabled, size }),
        textVariants(),
        className
      )}
      {...props}
    />
  )
}
