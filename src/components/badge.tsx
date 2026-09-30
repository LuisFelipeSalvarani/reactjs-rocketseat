import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentProps } from "react"
import { Text } from "./text"

export const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full",
  {
    defaultVariants: {
      size: "sm",
      variant: "primary",
    },
    variants: {
      size: {
        sm: "px-2 py-0.5",
      },
      variant: {
        primary: "bg-green-light",
        secondary: "bg-pink-light",
      },
    },
  }
)

export const badgeTextVariants = cva("", {
  defaultVariants: {
    variant: "primary",
  },
  variants: {
    variant: {
      primary: "text-green-dark",
      secondary: "text-pink-dark",
    },
  },
})

interface BadgeProps
  extends ComponentProps<"div">,
    VariantProps<typeof badgeVariants> {}

export function Badge({
  variant,
  size,
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <div className={badgeVariants({ className, size, variant })} {...props}>
      <Text className={badgeTextVariants({ variant })} variant="body-sm-bold">
        {children}
      </Text>
    </div>
  )
}
