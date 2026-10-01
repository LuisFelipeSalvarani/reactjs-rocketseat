import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentProps } from "react"
import SpinnerIcon from "../assets/icons/spinner.svg?react"
import { Icon } from "./icon"
import { Text } from "./text"

export const buttonVariants = cva(
  "group flex cursor-pointer items-center justify-center gap-2 rounded-lg transition",
  {
    defaultVariants: {
      disabled: false,
      handling: false,
      size: "md",
      variant: "primary",
    },
    variants: {
      disabled: {
        true: "pointer-events-none opacity-50",
      },
      handling: {
        true: "pointer-events-none",
      },
      size: {
        md: "h-14 px-5 py-4",
      },
      variant: {
        primary: "bg-gray-200 hover:bg-pink-light",
      },
    },
  }
)

export const buttonIconVariants = cva("transition", {
  defaultVariants: {
    size: "md",
    variant: "primary",
  },
  variants: {
    size: {
      md: "h-5 w-5",
    },
    variant: {
      primary: "fill-pink-base",
    },
  },
})

export const buttonTextVariants = cva("", {
  defaultVariants: {
    variant: "primary",
  },
  variants: {
    variant: {
      primary: "text-gray-400",
    },
  },
})

interface ButtonProps
  extends Omit<ComponentProps<"button">, "size" | "disabled">,
    VariantProps<typeof buttonVariants> {
  handling?: boolean
  icon?: ComponentProps<typeof Icon>["svg"]
}

export function Button({
  variant,
  size,
  disabled,
  className,
  children,
  icon,
  handling,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({
        className,
        disabled,
        handling,
        size,
        variant,
      })}
      {...props}
    >
      {!!icon && (
        <Icon
          animate={handling}
          className={buttonIconVariants({ size, variant })}
          svg={handling ? SpinnerIcon : icon}
        />
      )}
      <Text className={buttonTextVariants({ variant })} variant="body-md-bold">
        {children}
      </Text>
    </button>
  )
}
