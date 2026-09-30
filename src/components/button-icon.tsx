import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentProps } from "react"
import { Icon } from "./icon"
import { Skeleton } from "./skeleton"

export const buttonIconVariants = cva(
  "group inline-flex cursor-pointer items-center justify-center transition",
  {
    defaultVariants: {
      disabled: false,
      size: "sm",
      variant: "primary",
    },
    variants: {
      disabled: {
        true: "pointer-events-none opacity-50",
      },
      size: {
        sm: "h-6 w-6 rounded",
      },
      variant: {
        none: "",
        primary: "bg-green-base hover:bg-green-dark",
        secondary: "bg-gray-200 hover:bg-pink-base",
        tertiary: "bg-transparent hover:bg-gray-200",
      },
    },
  }
)

export const buttonIconIconVariants = cva("transition", {
  defaultVariants: {
    size: "sm",
    variant: "primary",
  },
  variants: {
    size: {
      sm: "h-4 w-4",
    },
    variant: {
      none: "",
      primary: "fill-white",
      secondary: "fill-pink-base group-hover:fill-white",
      tertiary: "fill-gray-300 group-hover:fill-gray-400",
    },
  },
})

interface ButtonIconProps
  extends Omit<ComponentProps<"button">, "size" | "disabled">,
    VariantProps<typeof buttonIconVariants> {
  icon: ComponentProps<typeof Icon>["svg"]
  loading?: boolean
}

export function ButtonIcon({
  variant,
  size,
  disabled,
  className,
  icon,
  loading,
  ...props
}: ButtonIconProps) {
  if (loading) {
    return (
      <Skeleton
        className={buttonIconVariants({ className, size, variant: "none" })}
        rounded="sm"
      />
    )
  }

  return (
    <button
      className={buttonIconVariants({ className, disabled, size, variant })}
      {...props}
    >
      <Icon className={buttonIconIconVariants({ size, variant })} svg={icon} />
    </button>
  )
}
