import { cva, cx, type VariantProps } from "class-variance-authority"
import type { ComponentProps } from "react"
import { Skeleton } from "./skeleton"
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
        none: "",
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
      none: "",
      primary: "text-green-dark",
      secondary: "text-pink-dark",
    },
  },
})

export const badgeSkeletonVariants = cva("", {
  defaultVariants: {
    size: "sm",
  },
  variants: {
    size: {
      sm: "h-6 w-6",
    },
  },
})

interface BadgeProps
  extends ComponentProps<"div">,
    VariantProps<typeof badgeVariants> {
  loading?: boolean
}

export function Badge({
  variant,
  size,
  className,
  children,
  loading,
  ...props
}: BadgeProps) {
  if (loading) {
    return (
      <Skeleton
        className={cx(
          badgeVariants({ variant: "none" }),
          badgeSkeletonVariants({ size }),
          className
        )}
        rounded="full"
      />
    )
  }

  return (
    <div className={badgeVariants({ className, size, variant })} {...props}>
      <Text className={badgeTextVariants({ variant })} variant="body-sm-bold">
        {children}
      </Text>
    </div>
  )
}
