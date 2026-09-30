import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentProps, FC } from "react"

export const iconVariants = cva("", {
  defaultVariants: {
    animate: false,
  },
  variants: {
    animate: {
      false: "",
      true: "animate-spin",
    },
  },
})

interface IconProps
  extends ComponentProps<"svg">,
    VariantProps<typeof iconVariants> {
  svg: FC<ComponentProps<"svg">>
}

export function Icon({
  svg: SvgComponent,
  animate,
  className,
  ...props
}: IconProps) {
  return (
    <SvgComponent
      className={iconVariants({
        animate,
        className,
      })}
      {...props}
    />
  )
}
