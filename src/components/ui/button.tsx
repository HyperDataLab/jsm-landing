import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
const buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20 disabled:pointer-events-none disabled:opacity-55 [&_svg]:size-4 [&_svg]:shrink-0", {
  variants: {
    variant: {
      default: "bg-primary text-white shadow-[0_8px_24px_-12px_rgba(0,113,188,0.65)] hover:-translate-y-0.5 hover:bg-primary-hover",
      outline: "border border-border bg-white text-ink hover:bg-surface-soft",
      ghost: "text-secondary hover:bg-surface-soft hover:text-ink",
      link: "text-primary underline-offset-4 hover:underline",
    },
    size: { default: "h-12 px-5", sm: "h-10 rounded-lg px-4 text-xs", lg: "h-14 px-6 text-sm sm:px-7 sm:text-base", icon: "size-10" },
  },
  defaultVariants: { variant: "default", size: "default" },
})
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, ...props }, ref) => (
  <button ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props} />
))
Button.displayName = "Button"
export { Button, buttonVariants }