import * as React from "react"
import { cn } from "@/lib/utils"
function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn("inline-flex items-center gap-1.5 rounded-full border border-primary/10 bg-primary-tint px-3 py-1.5 text-xs font-bold text-primary", className)} {...props} />
}
export { Badge }