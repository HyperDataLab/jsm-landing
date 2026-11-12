import * as DialogPrimitive from "@radix-ui/react-dialog"
import { XMarkIcon } from "@heroicons/react/24/outline"
import { motion } from "motion/react"
import * as React from "react"
import { useTranslation } from "react-i18next"
import { cn } from "@/lib/utils"

const Sheet = DialogPrimitive.Root
const SheetTrigger = DialogPrimitive.Trigger
const SheetClose = DialogPrimitive.Close
const SheetTitle = DialogPrimitive.Title

const SheetContent = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Content>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>>(
  ({ className, children, ...props }, ref) => (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay asChild>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="fixed inset-0 z-[60] bg-ink/25 backdrop-blur-sm"
        />
      </DialogPrimitive.Overlay>
      <DialogPrimitive.Content ref={ref} asChild {...props}>
        <motion.div
          initial={{ x: 28, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 420, damping: 36 }}
          className={cn("fixed right-0 top-0 z-[70] flex h-dvh w-[min(22rem,90vw)] flex-col border-l border-border bg-white p-6 shadow-2xl focus:outline-none", className)}
        >
          {children}
        </motion.div>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  ),
)
SheetContent.displayName = "SheetContent"

const SheetDismiss = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Close>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Close>>(
  ({ className, ...props }, ref) => {
    const { t } = useTranslation()
    return (
      <DialogPrimitive.Close ref={ref} className={cn("absolute right-5 top-5 rounded-lg p-2 text-secondary hover:bg-surface-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30", className)} {...props}>
        <XMarkIcon className="size-5" /><span className="sr-only">{t("nav.closeMenu")}</span>
      </DialogPrimitive.Close>
    )
  },
)
SheetDismiss.displayName = "SheetDismiss"

export { Sheet, SheetTrigger, SheetClose, SheetTitle, SheetContent, SheetDismiss }