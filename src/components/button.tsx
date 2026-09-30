import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentProps } from "react"
import { Icon } from "./icon"
import { Text } from "./text"

export const buttonVariants = cva(
  "group flex cursor-pointer items-center justify-center gap-2 rounded-lg transition",
  {
    defaultVariants: {
      disabled: false,
      size: "md",
      variant: "primary",
    },
    variants: {
      disabled: {
        true: "pointer-events-none opacity-50",
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
  icon?: ComponentProps<typeof Icon>["svg"]
}

export function Button({
  variant,
  size,
  disabled,
  className,
  children,
  icon: IconComponent,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({ className, disabled, size, variant })}
      {...props}
    >
      {!!IconComponent && (
        <Icon
          className={buttonIconVariants({ size, variant })}
          svg={IconComponent}
        />
      )}
      <Text className={buttonTextVariants({ variant })} variant="body-md-bold">
        {children}
      </Text>
    </button>
  )
}
