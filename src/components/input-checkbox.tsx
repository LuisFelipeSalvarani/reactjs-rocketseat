import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentProps } from "react"
import CheckIcon from "../assets/icons/check.svg?react"
import { Icon } from "./icon"
import { Skeleton } from "./skeleton"

export const inputCheckboxWrapperVariants = cva(
  "group relative inline-flex items-center justify-center"
)

export const inputCheckboxVariants = cva(
  "peer flex cursor-pointer appearance-none items-center justify-center overflow-hidden",
  {
    defaultVariants: {
      disabled: false,
      size: "md",
      variant: "default",
    },
    variants: {
      disabled: {
        true: "pointer-events-none",
      },
      size: {
        md: "h-5 w-5 rounded-sm",
      },
      variant: {
        default:
          "border-2 border-green-base border-solid transition checked:border-green-base checked:bg-green-base hover:border-green-dark hover:bg-green-dark/20 group-hover:checked:border-green-dark group-hover:checked:bg-green-dark",
        none: "",
      },
    },
  }
)

export const inputCheckboxIconVariants = cva(
  "absolute top-1/2 left-1 hidden -translate-y-1/2 fill-white peer-checked:block",
  {
    defaultVariants: {
      size: "md",
    },
    variants: {
      size: {
        md: "h-3 w-3",
      },
    },
  }
)

interface InputCheckboxProps
  extends Omit<ComponentProps<"input">, "size" | "disabled">,
    VariantProps<typeof inputCheckboxVariants> {
  loading?: boolean
}

export function InputCheckbox({
  variant,
  size,
  disabled,
  className,
  loading,
  ...props
}: InputCheckboxProps) {
  if (loading) {
    return (
      <Skeleton
        className={inputCheckboxVariants({
          size,
          variant: "none",
        })}
        rounded="sm"
      />
    )
  }

  return (
    <label className={inputCheckboxWrapperVariants({ className })}>
      <input
        className={inputCheckboxVariants({ disabled, size, variant })}
        type="checkbox"
        {...props}
      />
      <Icon className={inputCheckboxIconVariants({ size })} svg={CheckIcon} />
    </label>
  )
}
