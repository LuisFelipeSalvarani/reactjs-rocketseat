import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentProps } from "react"

export const skeletonVariants = cva(
  "pointer-events-none animate-pulse bg-gray-200",
  {
    defaultVariants: {
      rounded: "lg",
    },
    variants: {
      rounded: {
        full: "rounded-full",
        lg: "rounded-lg",
        sm: "rounded-sm",
      },
    },
  }
)

interface SkeletonProps
  extends ComponentProps<"div">,
    VariantProps<typeof skeletonVariants> {}

export function Skeleton({ rounded, className, ...props }: SkeletonProps) {
  return <div className={skeletonVariants({ className, rounded })} {...props} />
}
